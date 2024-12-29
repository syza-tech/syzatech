import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormProps {
  isSubmitting: boolean;
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

export const ContactForm = ({ isSubmitting, onSubmit }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    onSubmit({ name, email, phone, message });
    
    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
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
  );
};