import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import cv from "@/assets/Muhammad_Alfreijat_Resume.pdf";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Muhammad Al-Freijat</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Software Engineer passionate about creating beautiful, functional
            digital experiences that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href={cv} target="_blank">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                See My CV
              </Button>
            </a>

            <a href={cv} download>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <Link to={"https://github.com/Muhammad51264"} target="_blank">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/muh-frejat/"}
              target="_blank"
            >
              <Button variant="ghost" size="icon" className="hover-glow">
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
            <Link
              to={"mailto:muh.freijat@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="hover-glow">
                <Mail className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
