import { ArrowRight, Zap, Heart, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const Home = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your website ready in just 2-3 days",
    },
    {
      icon: Heart,
      title: "Affordable Pricing",
      description: "Quality websites that won't break the bank",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect on all devices, from phones to desktops",
    },
  ];

  const features = [
    "Clean, modern design",
    "Mobile-first approach",
    "Fast loading times",
    "SEO optimized",
    "No upfront payment",
    "Satisfaction guaranteed",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-card"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Building Your{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Fast, affordable, and clean website designs for small businesses, startups, and personal brands.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get Your Website Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
              <NavLink to="/pricing">
                <Button variant="outline" size="xl">
                  View Pricing
                </Button>
              </NavLink>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">2-3 Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">No Upfront Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose SyzaTech?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We focus on what matters most: delivering quality websites quickly and affordably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every website comes with these essential features included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/services">
              <Button variant="secondary" size="lg">
                Learn More About Our Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of our recent website projects (coming soon)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Screenshot</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Project Name {item}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Short description of the project and client requirements.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    View Site
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who chose SyzaTech for their digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button variant="accent" size="xl">
                  Start Your Project
                </Button>
              </NavLink>
              <NavLink to="/about">
                <Button variant="accent" size="xl" className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary">
                  Learn About Us
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;