import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Muhammad51264", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muh-frejat/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "muh.freijat@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              Muhammad Al-Freijat
            </h3>
            <p className="text-muted-foreground mb-4">
              Software Engineer passionate about creating beautiful, functional
              digital experiences.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Let's Work Together</h4>
            <p className="text-muted-foreground mb-4">
              Ready to bring your ideas to life? Let's create something amazing
              together.
            </p>
            <Link
              to={"mailto:muh.freijat@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Muhammad Al-Freijat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
