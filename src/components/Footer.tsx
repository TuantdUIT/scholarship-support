import { GraduationCap, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ScholarAI</h3>
                <p className="text-sm opacity-80">Study Abroad Support</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering students worldwide with AI-powered scholarship recommendations 
              and comprehensive application support for studying abroad.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-smooth" />
              <Linkedin className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-smooth" />
              <Facebook className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-smooth">Scholarship Matching</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Profile Building</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Application Support</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Document Review</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Deadline Tracking</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Mentor Network</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-smooth">Study Guides</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Country Guides</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Success Stories</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Help Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@scholarai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © 2024 ScholarAI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-60">
              <a href="#" className="hover:opacity-100 transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-smooth">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;