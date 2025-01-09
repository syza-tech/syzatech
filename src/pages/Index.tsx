import { motion } from "framer-motion";
import { ArrowRight, Code, Laptop, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
              Transforming Ideas into Stunning Websites, Applications, and Software Solutions
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
              At SYZA Tech, we specialize in delivering high-quality software solutions tailored to your business needs. 
              Our focus is on creating visually appealing and functional websites, applications, and software services 
              that exceed client expectations.
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Laptop className="w-12 h-12 mb-4 text-primary" />,
                title: "Website Development",
                description:
                  "We design and develop custom websites that reflect your brand identity and engage your audience.",
              },
              {
                icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
                title: "App Development",
                description:
                  "From concept to launch, we create mobile applications that captivate users and drive results.",
              },
              {
                icon: <Code className="w-12 h-12 mb-4 text-primary" />,
                title: "Software Solutions",
                description:
                  "We develop custom software solutions tailored to your business needs, helping you streamline operations and boost efficiency.",
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
                {service.icon}
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

      {/* Project Showcase */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary/80">
              Explore some of our recent work
            </p>
          </motion.div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.",
                  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                  technologies: ["React", "Node.js", "MongoDB", "Stripe"],
                },
                {
                  title: "Healthcare Management System",
                  description: "A comprehensive healthcare management system that streamlines patient records, appointments, and billing processes.",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                  technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
                },
                {
                  title: "Real Estate Platform",
                  description: "A feature-rich real estate platform with virtual tours, property management, and automated scheduling system.",
                  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                  technologies: ["Next.js", "Prisma", "AWS", "TailwindCSS"],
                },
              ].map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-[300px] overflow-hidden rounded-lg">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="text-2xl font-bold text-secondary mb-4">
                            {project.title}
                          </h3>
                          <p className="text-secondary/80 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
