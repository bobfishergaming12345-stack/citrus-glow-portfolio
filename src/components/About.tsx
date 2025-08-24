import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "Figma", "Tailwind CSS", "Next.js"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating innovative web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a full-stack developer who loves turning complex problems into simple, 
              beautiful solutions. My journey started with curiosity about how things work 
              on the web, and it's evolved into a passion for creating meaningful digital experiences.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers in my community.
            </p>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Core Values</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Clean, maintainable code
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  User-centered design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Continuous learning
                </li>
              </ul>
            </div>
          </div>

          <Card className="gradient-card shadow-orange border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Frontend Development</span>
                  <span className="text-accent">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="gradient-accent h-2 rounded-full w-[95%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Backend Development</span>
                  <span className="text-accent">90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="gradient-accent h-2 rounded-full w-[90%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">UI/UX Design</span>
                  <span className="text-accent">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="gradient-accent h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;