import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React 19: What's New",
    excerpt: "Explore the latest features in React 19 including the new compiler, server components, and improved performance optimizations.",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    category: "React",
    trending: true,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn best practices for creating robust and scalable REST APIs using Node.js, Express, and modern architectural patterns.",
    date: "Jan 8, 2026",
    readTime: "8 min read",
    category: "Backend",
    trending: true,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Types and Patterns",
    excerpt: "Deep dive into advanced TypeScript concepts including generics, conditional types, and utility types for better code quality.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    category: "TypeScript",
    trending: true,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "MongoDB vs PostgreSQL: Choosing the Right Database",
    excerpt: "A comprehensive comparison of MongoDB and PostgreSQL to help you choose the best database for your next project.",
    date: "Jan 3, 2026",
    readTime: "7 min read",
    category: "Database",
    trending: false,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "Understanding the differences between CSS Grid and Flexbox and knowing when to use each for optimal layouts.",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    category: "CSS",
    trending: false,
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "DevOps Best Practices for Frontend Developers",
    excerpt: "Essential DevOps concepts every frontend developer should know, from CI/CD pipelines to containerization with Docker.",
    date: "Dec 25, 2025",
    readTime: "9 min read",
    category: "DevOps",
    trending: false,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Latest <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing my knowledge and experiences in web development, programming, and technology trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {blog.category}
                </span>
                
                {/* Trending Badge */}
                {blog.trending && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-destructive/90 text-destructive-foreground text-xs font-medium rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
