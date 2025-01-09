import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
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
  );
};

export default ContactHeader;