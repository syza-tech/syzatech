import { User, Target, Zap, Heart, CheckCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "We believe in fast delivery without compromising quality. Your website will be ready in 2-3 days."
    },
    {
      icon: Heart,
      title: "Customer-First",
      description: "No upfront payments, satisfaction guarantee, and ongoing support. Your success is our priority."
    },
    {
      icon: Code,
      title: "Clean & Modern",
      description: "We create beautiful, functional websites using the latest web technologies and design principles."
    }
  ];

  const stats = [
    { number: "100+", label: "Websites Delivered" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "2-3", label: "Days Average Delivery" },
    { number: "24/7", label: "Support Available" }
  ];

  const journey = [
    {
      year: "2024",
      title: "The Beginning",
      description: "Syed Zaahid founded SyzaTech with a vision to make quality web design accessible to everyone."
    },
    {
      year: "2025",
      title: "Growing Strong",
      description: "Expanding our services and helping more businesses establish their digital presence."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">SyzaTech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by Syed Zaahid, SyzaTech helps individuals and businesses get online quickly with beautiful, functional websites.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet the Founder
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Hi, I'm <span className="text-foreground font-semibold">Syed Zaahid</span>, the founder of SyzaTech. 
                  I started this company with a simple mission: to make professional web design accessible and affordable for everyone.
                </p>
                <p>
                  Having worked with numerous small businesses and startups, I noticed a common challenge - getting a quality website 
                  without breaking the bank or waiting weeks for delivery. That's when I decided to create SyzaTech.
                </p>
                <p>
                  Today, we focus on delivering fast, beautiful, and functional websites that help our clients establish 
                  their digital presence quickly and effectively.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 bg-gradient-card p-6">
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To democratize web design by providing fast, affordable, and high-quality websites 
                      that help businesses and individuals succeed online.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-card p-6">
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <Zap className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become the go-to platform for small businesses and individuals who want 
                      a professional online presence without the complexity and high costs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at SyzaTech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-background hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              SyzaTech by the Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our track record speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From a simple idea to helping businesses succeed online.
            </p>
          </div>

          <div className="space-y-8">
            {journey.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero text-white font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose SyzaTech?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "No upfront payment required",
              "Fast 2-3 day delivery",
              "100% satisfaction guarantee",
              "Mobile-first design approach",
              "Clean, modern aesthetics",
              "SEO optimization included",
              "Ongoing support available",
              "Transparent pricing",
              "Customer-focused service"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let's build something amazing together. Get in touch and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button variant="accent" size="xl">
                  Get Started
                </Button>
              </NavLink>
              <NavLink to="/services">
                <Button variant="accent" size="xl" className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary">
                  View Services
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;