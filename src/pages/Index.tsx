import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-6">
              Welcome to SYZA Tech
              <span className="text-primary block mt-2">
                Your Partner in Digital Innovation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary/80 max-w-3xl mx-auto mb-8">
              Transforming Ideas into Stunning Websites and Applications
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
              About Us
            </h2>
            <p className="text-lg text-secondary/80 mb-8">
              At SYZA Tech, we specialize in delivering high-quality software
              solutions tailored to your business needs. Our focus is on creating
              visually appealing and functional websites and applications that
              exceed client expectations.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
            >
              Learn More
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-secondary/80">
              Discover how we can help your business grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Website Development",
                description:
                  "We design and develop custom websites that reflect your brand identity and engage your audience.",
              },
              {
                title: "App Development",
                description:
                  "From concept to launch, we create mobile applications that captivate users and drive results.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary/80 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss how we can elevate your business!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors group"
            >
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;