import { motion } from "framer-motion";
import { ArrowRight, Code, Laptop, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 mb-4 text-primary" />,
      title: "Website Development",
      description: "We design and develop custom websites that reflect your brand identity and engage your audience.",
    },
    {
      icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
      title: "App Development",
      description: "From concept to launch, we create mobile applications that captivate users and drive results.",
    },
    {
      icon: <Code className="w-12 h-12 mb-4 text-primary" />,
      title: "Software Solutions",
      description: "We develop custom software solutions tailored to your business needs, helping you streamline operations and boost efficiency.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At SYZA Tech, we offer a range of software services designed to help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in learning more about how our services can benefit your business?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;