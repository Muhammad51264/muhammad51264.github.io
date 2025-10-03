import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive and maintainable web applications using React, Next.js, and Angular.",
    },
    {
      icon: Code,
      title: "Backend Integration",
      description:
        "Integrating APIs and backend services using Node.js, Express.js, and Java Spring Boot.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing web applications for speed and efficiency on both frontend and backend.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Contributing to agile teams for clients like Forbes and Hearst, delivering projects efficiently.",
    },
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 2+ years of experience building web
            applications. I enjoy solving complex problems and delivering
            efficient, maintainable, and scalable digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              I'm a frontend and full-stack developer with experience on
              projects for clients like Forbes and Hearst. I work with React,
              Next.js, Node.js, and Java Spring Boot, focusing on clean,
              maintainable, and efficient code.
            </p>
            <p className="text-muted-foreground mb-6">
              Outside of work, I explore new technologies, build personal
              projects, and improve my development skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React",
                "Angular",
                "Next.js",
                "React Native",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Java",
                "Spring Boot",
                "Bootstrap",
                "Git",
              ].map((tech) => (
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
