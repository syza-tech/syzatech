import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ExportButton } from "@/components/contact/ExportButton";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  timestamp: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const saveSubmission = (submission: ContactSubmission) => {
    try {
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const updatedSubmissions = [submission, ...existingSubmissions];
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
      return true;
    } catch (error) {
      console.error('Error saving submission:', error);
      return false;
    }
  };

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    setIsSubmitting(true);

    try {
      const submission: ContactSubmission = {
        id: crypto.randomUUID(),
        ...formData,
        timestamp: new Date().toISOString(),
      };

      const saved = saveSubmission(submission);

      if (saved) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon!",
        });
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
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <ContactForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
              <div className="pt-4 border-t">
                <ExportButton />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;