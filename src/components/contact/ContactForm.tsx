import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  timestamp: string;
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    if (!name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const saveSubmission = (submission: ContactSubmission) => {
    try {
      const existingSubmissions = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]"
      );
      const updatedSubmissions = [submission, ...existingSubmissions];
      localStorage.setItem(
        "contactSubmissions",
        JSON.stringify(updatedSubmissions)
      );
      return true;
    } catch (error) {
      console.error("Error saving submission:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const submission: ContactSubmission = {
        id: crypto.randomUUID(),
        name,
        email,
        message,
        phone: phone || undefined,
        timestamp: new Date().toISOString(),
      };

      const saved = saveSubmission(submission);

      if (saved) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon!",
        });

        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error("Failed to save submission");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary mb-2"
          >
            Name *
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary mb-2"
          >
            Email *
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-primary mb-2"
          >
            Phone (optional)
          </label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full"
            placeholder="Your phone number"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-primary mb-2"
          >
            Message *
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full min-h-[150px]"
            placeholder="How can we help you?"
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;