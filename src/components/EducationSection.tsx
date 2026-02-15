import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.TECH(Bachelor of Technology)",
    institution: "Srinix College Of Engineering, Balsore, Odisha",
    period: "Present",
    status: "",
  },
  {
    degree: "Dipolma",
    institution: "Balasore School Of Engineering, Balasore, Odisha",
    period: "2021-2024",
    status: "Completed",
  },
  {
    degree: "High School",
    institution: "Sri Satya Sai Vidya Vihar,ITI, Balasore, Odisha",
    period: "2018-2021",
    status: "Completed",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground italic max-w-xl mx-auto">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="h-2 bg-gradient-primary" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mb-4">{edu.institution}</p>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.period}</span>
                  <span className="ml-auto text-xs px-2 py-1 bg-primary/20 rounded-full">
                    {edu.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
