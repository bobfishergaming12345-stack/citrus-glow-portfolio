import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-orange">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-accent">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Collaboration"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full shadow-orange" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">
                  Get In Touch
                </h3>
                <div className="space-y-4 text-foreground/80">
                  <p className="leading-relaxed">
                    I'm always open to discussing new opportunities, creative projects, 
                    or potential collaborations. Whether you're a startup looking to build 
                    your first product or an established company wanting to modernize your tech stack.
                  </p>
                  <p className="leading-relaxed">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-16 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <div className="flex flex-col items-center gap-2">
                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">{social.label}</span>
                          </div>
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  Current Status
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-foreground/80">Available for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;