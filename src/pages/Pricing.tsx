import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Single Page",
      price: "₹999",
      description: "Perfect for landing pages and simple portfolios",
      features: [
        "1 Professional page",
        "Mobile responsive design",
        "Contact section",
        "SEO optimization",
        "Fast loading",
        "2-3 day delivery"
      ],
      popular: false
    },
    {
      name: "Multi-Page",
      price: "₹1999",
      description: "Ideal for small businesses and complete portfolios",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Navigation menu",
        "Contact forms",
        "SEO optimization",
        "Image galleries",
        "Social media integration",
        "2-3 day delivery"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Quote",
      description: "Tailored solutions for unique requirements",
      features: [
        "Custom page count",
        "Advanced functionality",
        "E-commerce catalog",
        "Custom integrations",
        "Premium design",
        "Priority support",
        "Extended features",
        "Flexible timeline"
      ],
      popular: false
    }
  ];

  const guarantees = [
    "No upfront payment required",
    "Pay only if you're satisfied",
    "Free revisions included",
    "Money-back guarantee",
    "Fast 2-3 day delivery",
    "Ongoing support available"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Simple <span className="bg-gradient-hero bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent, affordable pricing with no hidden fees. Pay only if you're happy with the result.
            </p>
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full">
              <Star className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary font-medium">No upfront payment required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 ${
                  plan.popular 
                    ? 'bg-gradient-hero text-white shadow-sunset transform scale-105' 
                    : 'bg-gradient-card'
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className={`text-xl ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                      {plan.price}
                    </div>
                    <p className={`text-sm ${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                        <span className={`${plan.popular ? 'text-white' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <NavLink to="/contact" className="block">
                      <Button 
                        variant={plan.popular ? "accent" : "hero"} 
                        size="lg" 
                        className="w-full"
                      >
                        {plan.price === "Quote" ? "Get Quote" : "Get Started"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Guarantee
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We stand behind our work with these customer-first promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-6 rounded-lg">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How does the "no upfront payment" work?
              </h3>
              <p className="text-muted-foreground">
                We start working on your project immediately. You only pay after you're completely satisfied with the result. This shows our confidence in delivering quality work.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What's included in the 2-3 day delivery?
              </h3>
              <p className="text-muted-foreground">
                Complete website development, responsive design, basic SEO setup, and one round of revisions. We'll have your site ready to launch within 2-3 business days.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Can I request changes after delivery?
              </h3>
              <p className="text-muted-foreground">
                Yes! We include free revisions to ensure you're happy with the final result. Additional changes beyond the scope can be discussed separately.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do you provide hosting and domain services?
              </h3>
              <p className="text-muted-foreground">
                We deliver the complete website files ready for deployment. We can guide you through hosting setup or recommend affordable hosting providers that work well with our websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Your Website?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Start your project today with zero upfront cost. Pay only when you're satisfied.
            </p>
          </div>
          <div className="pt-8">
            <NavLink to="/contact">
              <Button variant="accent" size="xl">
                Start Your Project Now
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;