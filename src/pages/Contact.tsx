import { Phone, Mail, Globe, Clock, MessageCircle, CheckCircle, Instagram, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 7200528110",
      description: "Available during business hours for direct consultation",
      href: "tel:+917200528110"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 7200528110",
      description: "Quick messages and instant communication",
      href: "https://wa.me/917200528110"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "syzatech2025@gmail.com",
      description: "Send us your requirements and we'll respond within 24 hours",
      href: "mailto:syzatech2025@gmail.com"
    }
  ];

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/syzatech",
      color: "text-blue-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/syzatech",
      color: "text-pink-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/syzatech",
      color: "text-blue-500"
    }
  ];


  const process = [
    "Contact us via phone or email",
    "Discuss your requirements and vision",
    "Receive a detailed quote and timeline",
    "We start working on your project",
    "Review and approve the final website",
    "Pay only when you're satisfied",
    "Launch your website"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? Contact us today and let's build your digital presence together.
            </p>
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary font-medium">Usually respond within 2 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you. We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-card hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href={method.href} 
                    className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors block"
                  >
                    {method.value}
                  </a>
                  <p className="text-muted-foreground">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Follow Us on Social Media
            </h3>
            <div className="flex justify-center space-x-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-card hover:shadow-lg transition-all duration-300"
                >
                  <social.icon className={`h-6 w-6 ${social.color} group-hover:scale-110 transition-transform`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps from initial contact to website launch.
            </p>
          </div>

          <div className="space-y-4">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gradient-card p-6 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-hero text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Quick Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions we receive from new clients.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How quickly can you start my project?
                </h3>
                <p className="text-muted-foreground">
                  We can usually start within 24 hours of receiving your requirements. 
                  Contact us today and we could begin your project tomorrow!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What information do you need to get started?
                </h3>
                <p className="text-muted-foreground">
                  Just tell us about your business, what pages you need, any specific requirements, 
                  and share any content or images you'd like to include. We'll handle the rest!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you offer ongoing maintenance?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We provide ongoing support and maintenance services to keep your website 
                  updated and running smoothly. Contact us for maintenance packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Don't wait any longer. Your perfect website is just a phone call or email away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+917200528110" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span className="text-lg font-semibold">+91 7200528110</span>
              </a>
              <span className="text-white/70">•</span>
              <a href="https://wa.me/917200528110" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="text-lg font-semibold">WhatsApp</span>
              </a>
              <span className="text-white/70">•</span>
              <a href="mailto:syzatech2025@gmail.com" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                <span className="text-lg font-semibold">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;