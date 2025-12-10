import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Cyberpunk City",
    category: "VFX",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop",
    tags: ["Blender", "After Effects"],
  },
  {
    id: 2,
    title: "Neon Dreams",
    category: "Editing",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop",
    tags: ["Premiere Pro", "Sound Design"],
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1626785774583-ea26420155a1?q=80&w=1000&auto=format&fit=crop",
    tags: ["Photoshop", "Illustrator"],
  },
  {
    id: 4,
    title: "Music Video",
    category: "Editing",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop",
    tags: ["DaVinci Resolve", "VFX"],
  },
  {
    id: 5,
    title: "Product Promo",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1542206395277-41548d8e109d?q=80&w=1000&auto=format&fit=crop",
    tags: ["C4D", "Octane"],
  },
  {
    id: 6,
    title: "Short Film",
    category: "Film",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    tags: ["Director", "Editor"],
  },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Selected <span className="text-primary">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">{project.title}</h3>
                <p className="text-muted-foreground font-tech uppercase tracking-wider text-sm flex items-center gap-2">
                  {project.category}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>

              {/* Neon Border on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
