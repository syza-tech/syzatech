import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  timestamp: string;
}

const Contact = () => {
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
      // Get existing submissions or initialize empty array
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      
      // Add new submission to array
      const updatedSubmissions = [submission, ...existingSubmissions];
      
      // Save back to localStorage
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
      
      return true;
    } catch (error) {
      console.error('Error saving submission:', error);
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
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We would love to hear from you! Whether you have a question about our services or need assistance with a project, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Email</h3>
                  <p className="text-muted-foreground">syzatech2025@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Phone</h3>
                  <p className="text-muted-foreground">Contact us via email for phone details</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Message</h3>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you promptly</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
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
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
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
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;