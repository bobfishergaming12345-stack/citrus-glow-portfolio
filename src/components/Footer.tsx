import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
  ];

  return (
    <footer className="bg-card/50 border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">
              Alex Johnson
            </div>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Alex Johnson. Made with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;