import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "SyzaTech delivered exactly what I needed for my business. The website looks professional and was completed in just 3 days. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Amazing service and fast turnaround time. The team understood our vision perfectly and created a website that exceeded our expectations."
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Freelance Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional, responsive, and affordable. SyzaTech made the entire process smooth and stress-free. I'll definitely work with them again."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              What <span className="bg-gradient-hero bg-clip-text text-transparent">Clients Say</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say about working with SyzaTech.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 bg-gradient-card hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground text-center leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex flex-col items-center space-y-3 pt-4 border-t border-border">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the growing number of satisfied clients who chose SyzaTech for their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Websites Delivered</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">2-3</div>
              <div className="text-muted-foreground">Days Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the same quality and satisfaction that our clients rave about. Let's build your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Start Your Project
              </a>
              <a 
                href="/pricing" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white border border-white/20 font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;