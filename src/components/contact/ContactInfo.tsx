import { Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:syzatech2025@gmail.com";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="space-y-8">
        <div 
          className="flex items-center space-x-4 cursor-pointer hover:text-primary transition-colors"
          onClick={handleEmailClick}
        >
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
  );
};

export default ContactInfo;