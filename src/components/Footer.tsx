import { Mail, Phone, Globe, MessageCircle, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              SyzaTech
            </h3>
            <p className="text-muted-foreground">
              Building Your Digital Presence with fast, affordable, and clean website designs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 7200528110</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">syzatech2025@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <a href="https://wa.me/917200528110" className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">syzatech.onrender.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-foreground mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/syzatech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/syzatech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/syzatech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 SyzaTech. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Founded by Syed Zaahid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;