import { motion } from "framer-motion";
import { Award, Building, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">About SYZA Tech</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SYZA Tech is dedicated to providing exceptional software services that empower businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">Our Company</h3>
            <p className="text-muted-foreground">
              Founded with a vision to transform digital landscapes, SYZA Tech has grown into a trusted partner for businesses seeking innovative software solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">Our Team</h3>
            <p className="text-muted-foreground">
              Our team consists of passionate professionals committed to excellence and customer satisfaction, bringing diverse expertise to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              We strive to be a leader in the software services industry by continuously improving our offerings and delivering exceptional value.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-card p-8 rounded-lg shadow-sm text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Our Commitment</h2>
          <p className="text-muted-foreground">
            At SYZA Tech, we're committed to delivering innovative solutions that help our clients succeed in the digital age. Our approach combines technical expertise with creative thinking to solve complex challenges and drive business growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;