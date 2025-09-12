import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/f40e3d56-9a6b-46e1-a440-7bc0d3aa7096.png" 
                alt="Zion Health Center Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-primary">
                Zion Health Center
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Providing exceptional healthcare services with compassion and expertise. 
              Your health and well-being are our top priorities.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Block: 5, NO: 76, Kodungaiyur (East), Kaviarasu Kannadhasan Nagar, Chennai, Tamil Nadu 600118
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  9444509509
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@zionhealth.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <div>Monday to Saturday: 10AM to 2PM, 6PM to 10PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/consultants" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Consultants
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Zion Health Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;