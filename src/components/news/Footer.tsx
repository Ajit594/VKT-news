import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { categories } from "@/data/newsData";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-12">
      {/* Main Footer */}
      <div className="container-news py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-secondary-foreground leading-none">
                  VKT News
                </h2>
                <p className="text-xs text-secondary-foreground/70">Truth First</p>
              </div>
            </a>
            <p className="text-secondary-foreground/80 text-sm mb-3 md:mb-4">
              India's most trusted news source delivering breaking news, in-depth analysis,
              and comprehensive coverage of politics, sports, entertainment, and more.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 8).map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-secondary-foreground/80 hover:text-gold-accent transition-colors text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "Advertise", "Careers", "Terms of Service", "Privacy Policy", "Sitemap", "RSS Feeds"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-secondary-foreground/80 hover:text-gold-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm">VKT News Tower, Connaught Place, New Delhi - 110001, India</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-sm text-secondary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">+91 11 2345 6789</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-sm text-secondary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">contact@vktnews.com</span>
              </li>
            </ul>
            <div className="mt-3 md:mt-4">
              <h4 className="text-sm font-semibold mb-2">Download Our App</h4>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 md:px-4 md:py-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg text-xs font-medium transition-colors">
                  App Store
                </button>
                <button className="px-3 py-1.5 md:px-4 md:py-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg text-xs font-medium transition-colors">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-news py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>© 2026 VKT News. All rights reserved.</p>
            <p>Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
