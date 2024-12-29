import { Mail, MessageSquare, Phone } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Mail className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-lg font-semibold text-primary">Email</h3>
          <p className="text-muted-foreground">syzatech2025@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-lg font-semibold text-primary">Phone</h3>
          <p className="text-muted-foreground">Contact us via email for phone details</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <MessageSquare className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-lg font-semibold text-primary">Message</h3>
          <p className="text-muted-foreground">Fill out the form and we'll get back to you promptly</p>
        </div>
      </div>
    </div>
  );
};