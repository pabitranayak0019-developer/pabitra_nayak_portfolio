import { motion } from "framer-motion";
import { Laptop, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

import quizCover from "@/assets/quiz-cover.png";
import typingCover from "@/assets/typing-cover.jpg";

const projects = [
  {
    title: "Smart Quiz Competition",
    description: "This is an interactive coding quiz built using HTML, CSS, and JavaScript. I built this project to practice study concepts and improve problem solving skills.",
    liveUrl: "https://pn-quiz-start.vercel.app/",
    codeUrl: "#",
    image: quizCover,
    tags: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    title: "Typing Speed Test",
    description: "Helps improve keyboard skills and finger placement.",
    liveUrl: "https://typing-speed-lovat.vercel.app/",
    codeUrl: "#",
    image: typingCover,
    tags: ["HTML", "CSS", "JAVASCRIPT"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Laptop className="w-8 h-8 text-primary" />
            Projects <span className="text-gradient">Made</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
