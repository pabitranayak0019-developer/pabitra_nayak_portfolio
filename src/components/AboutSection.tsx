import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutProfileImg from "@/assets/about-profile.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-primary" />
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-lg" />
              <img
                src={aboutProfileImg}
                alt="Pabitra Nayak"
                className="relative w-72 md:w-80 h-auto rounded-2xl object-cover shadow-card"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">I'm Pabitra Nayak</h3>
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Software Engineer
            </span>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hi,I’m Pabitra Nayak, a fresher web developer with a strong interest in building responsive and user friendly websites.I work with HTML, CSS, and JavaScript,and I’m currently exploring modern frameworks like Vue.js. 
								 I enjoy learning by building projects,improving my UI skills,and turning ideas into functional web pages.I’m always eager to learn new technologies and grow as a developer. As a fresher,I bring curiosity, dedication,
								   and a strong willingness to improve. I’m excited to start my professional journey and contribute to real world projects.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <User className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">DOB:</strong> 02.07.2004</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">Phone:</strong> +91 XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">Email:</strong> pabitranayak0017@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">Place:</strong> Balasore, Odisha</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <a href="https://drive.google.com/file/d/1u-l4AT2rFNl_gnV8ya0Y5rKkgJH6wJq2/view?usp=sharing" target="_blank">
                  Resume
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
