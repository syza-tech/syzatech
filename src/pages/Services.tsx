import { Globe, Briefcase, Layout, ShoppingBag, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Static Websites",
      description: "Perfect for personal portfolios, landing pages, and simple business websites. Fast, secure, and easy to maintain.",
      features: ["Responsive design", "SEO optimized", "Fast loading", "Contact sections"]
    },
    {
      icon: Briefcase,
      title: "Business Portfolios",
      description: "Professional websites that showcase your business, services, and team. Built to convert visitors into customers.",
      features: ["Professional design", "Service showcase", "Team profiles", "Testimonials"]
    },
    {
      icon: Layout,
      title: "Custom Pages",
      description: "Tailored web pages designed specifically for your unique requirements and brand identity.",
      features: ["Custom layouts", "Brand integration", "Interactive elements", "Unique functionality"]
    },
    {
      icon: ShoppingBag,
      title: "Basic Online Stores",
      description: "Catalog-style online stores to showcase your products. Perfect for small businesses starting their online journey.",
      features: ["Product catalog", "Image galleries", "Contact forms", "Mobile optimized"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "We discuss your requirements and vision"
    },
    {
      step: "2", 
      title: "Design",
      description: "Create a beautiful, functional design"
    },
    {
      step: "3",
      title: "Development",
      description: "Build your website with clean code"
    },
    {
      step: "4",
      title: "Delivery",
      description: "Launch your site in 2-3 days"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a range of digital services designed to get your business online quickly and affordably.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Delivered in 2-3 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/pricing">
              <Button variant="hero" size="lg">
                View Pricing Plans
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, straightforward steps to get your website live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every website comes with these essential features built-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Mobile responsive design",
              "SEO optimization",
              "Fast loading speeds",
              "Cross-browser compatibility",
              "Clean, modern design",
              "Contact information",
              "Social media integration",
              "Basic analytics setup",
              "SSL certificate ready"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gradient-card p-4 rounded-lg">
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get in touch today and let's build your digital presence together.
            </p>
          </div>
          <div className="pt-8">
            <NavLink to="/contact">
              <Button variant="accent" size="xl">
                Get Started Now
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;