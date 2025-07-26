import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern patterns."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces that provide exceptional user experiences."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications that deliver results efficiently."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to bring ideas to life and exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions. 
            I love turning complex problems into simple, beautiful designs that users enjoy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started as a curious student learning HTML and CSS, I've evolved into a 
              full-stack developer who thrives on creating meaningful digital experiences. 
              My journey has taken me through various technologies and frameworks, always 
              with a focus on clean code and user-centered design.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="glass-effect hover-glow border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;