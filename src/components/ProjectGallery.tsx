import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, PlayCircle, X } from "lucide-react";
import { Badge } from "./ui/badge";  // Changed from "@/components/ui/badge"
import { useState } from "react";

/* ================= TYPES ================= */

type Project = {
  id: number;
  title: string;
  tags: string[];
  image?: string;
  video?: string;
  youtube?: string; // YT VIDEO ID ONLY
  link?: string;
};

type Category = {
  title: string;
  key: string;
  layout?: "landscape";
  projects: Project[];
};

/* ================= DATA ================= */

const categories: Category[] = [
  /* ---------- SHORT FILMS ---------- */

  /* ---------- YT / INSTA SHORT-FORM VIDEOS ---------- */
{
  title: "YT / Insta Short-Form Videos",
  key: "shortform",
  projects: [
    {
      id: 101,
      title: "BNL BRAND – Brand Celebration",
      youtube: "SMb-OMY874k",
      link: "https://youtu.be/SMb-OMY874k",
      tags: ["Instagram Reels", "Short-Form", "Fast Cuts"],
    },
    {
      id: 102,
      title: "THE BRANDBOX - BRAND PROMO",
      youtube: "2OVYG00i5P8",
      link: "https://youtu.be/2OVYG00i5P8",
      tags: ["YouTube Shorts", "Hook Editing"],
    },
    {
      id: 103,
      title: "Vertical Reel – Trend Based",
      youtube: "8zchYSFzIvc",
      link: "https://youtu.be/8zchYSFzIvc",
      tags: ["Vertical Video", "Trending"],
    },
    {
      id: 104,
      title: "PIXDOT SOLUTIONS - TENKASI BRANCH OPENING",
      youtube: "DsaRTP0WZMM",
      link: "https://youtu.be/DsaRTP0WZMM",
      tags: ["Vertical Video", "Trending"],
    },
  ],
},

  {
    title: "Short Films",
    key: "shortfilms",
    layout: "landscape",
    projects: [
      {
        id: 1,
        title: "Short Film – The Wrong Way",
        youtube: "weLzrLcUmcs",
        link: "https://youtu.be/weLzrLcUmcs",
        tags: ["Director", "Editor"],
      },
    ],
  },

  /* ---------- VFX ---------- */
  {
    title: "VFX Works",
    key: "vfx",
    projects: [
      {
        id: 2,
        title: "END TITLE CARD – SHAGUL HAMEED",
        youtube: "tyXBzx2-qEw",
        link: "https://youtu.be/tyXBzx2-qEw",
        tags: ["Blender", "After Effects"],
      },
      {
        id: 3,
        title: "Teaser - The Wrong Way",
        youtube: "RczT3c9hVMI",
        link: "https://youtu.be/RczT3c9hVMI",
        tags: ["Blender", "After Effects"],
      },
      {
        id: 4,
        title: "PROMO – KADAISI NAMBIKAI",
        youtube: "q2C12Pn0IvM",
        link: "https://youtu.be/q2C12Pn0IvM",
        tags: ["Blender", "After Effects"],
      },
      {
        id: 5,
        title: "SUPRA VFX SHOWREEL",
        youtube: "SPEX1G_dWYw",
        link: "https://youtu.be/SPEX1G_dWYw",
        tags: ["Blender", "After Effects"],
      },
      {
        id: 6,
        title: "BMW VFX SHOWREEL",
        youtube: "dKnKW5BP8N8",
        link: "https://youtu.be/dKnKW5BP8N8",
        tags: ["Blender", "After Effects"],
      },
      {
        id: 7,
        title: "BMW VFX SHOWREEL",
        youtube: "NVB00MD6wJU",
        link: "https://youtu.be/NVB00MD6wJU",
        tags: ["Blender", "After Effects"],
      },
      
    ],
  },

  /* ---------- LOGO / PRODUCT PROMOS ---------- */
  {
    title: "Logo / Product Promotions",
    key: "logos",
    projects: [
      {
        id: 6,
        title: "VAJIHA MEHANDI ARTIST Logo Animation",
        youtube: "9AxqCzO_3tU",
        link: "https://youtu.be/9AxqCzO_3tU",
        tags: ["After Effects", "Logo Animation"],
      },
      {
        id: 7,
        title: "Nikafae Boutique Logo Reveal",
        youtube: "Ba-9m0kvLUk",
        link: "https://youtu.be/Ba-9m0kvLUk",
        tags: ["Branding", "3D Logo"],
      },
      {
        id: 8,
        title: "Digikets Marketing Logo Reveal",
        youtube: "-tg_wyNGcQE",
        link: "https://youtu.be/-tg_wyNGcQE",
        tags: ["Marketing", "Logo Reveal"],
      },
      {
        id: 9,
        title: "Manju Magic Company Logo Reveal",
        youtube: "Zic_oZtsYHM",
        link: "https://youtu.be/Zic_oZtsYHM",
        tags: ["Marketing", "Logo Reveal"],
      },
      {
        id: 10,
        title: "Sri Thirumalai Roofing Logo Reveal",
        youtube: "OZ8-cPW1dSY",
        link: "https://youtu.be/OZ8-cPW1dSY",
        tags: ["Marketing", "Logo Reveal"],
      },
    ],
  },

  /* ---------- MARKETING REELS ---------- */
  {
    title: "Marketing Reels (Trendy)",
    key: "marketing",
    projects: [
      {
        id: 11,
        title: "Vajiha Mehandi Artist – Product Reel",
        youtube: "W7BIbaL2jbQ",
        link: "https://youtu.be/W7BIbaL2jbQ",
        tags: ["Reels", "Transitions"],
      },
      {
        id: 12,
        title: "Vajiha Mehandi Artist – Trend Reel",
        youtube: "ztoAsr8gs0k",
        link: "https://youtu.be/ztoAsr8gs0k",
        tags: ["Trendy", "Color Grading"],
      },
      {
        id: 13,
        title: "Nikafae Boutique – Trend Reel",
        youtube: "uFrtVs2lv9o",
        link: "https://youtu.be/uFrtVs2lv9o",
        tags: ["Trendy", "Color Grading"],
      },
      {
        id: 14,
        title: "Nikafae Boutique – Trend Reel",
        youtube: "yFd1riTMXus",
        link: "https://youtu.be/yFd1riTMXus",
        tags: ["Trendy", "Color Grading"],
      },
      {
        id: 15,
        title: "Vajiha Mehandi Artist – Trend Reel",
        youtube: "8TK2RQ4C7pU",
        link: "https://youtu.be/8TK2RQ4C7pU",
        tags: ["Trendy", "Color Grading"],
      },
      {
        id: 16,
        title: "Vajiha Mehandi Artist – Trend Reel",
        youtube: "lVKoKqdCF-I",
        link: "https://youtu.be/lVKoKqdCF-I",
        tags: ["Trendy", "Color Grading"],
      },
      {
        id: 17,
        title: "BNL INSTITUTE",
        youtube: "SMb-OMY874k",
        link: "https://youtu.be/SMb-OMY874k",
        tags: ["Blender", "After Effects"],
      },
    ],
  },

  /* ---------- GRAPHIC DESIGNS ---------- */
  {
    title: "Graphic Designs",
    key: "graphics",
    projects: [
      {
        id: 13,
        title: "Manju Magic Design",
        image: "/MANJU.png",
        tags: ["Photoshop", "Branding"],
      },
      {
        id: 14,
        title: "Freelance Graphic Design (Motion)",
        video: "/FREELANCE GRAPHIC DESIGN.mp4",
        tags: ["Motion Design", "After Effects"],
      },
      {
        id: 15,
        title: "Freelance Board Design",
        image: "/FRELANCE BOARD.png",
        tags: ["Layout Design"],
      },
      {
        id: 16,
        title: "College Work",
        image: "/CLG WORK.png",
        tags: ["Academic", "Design"],
      },
      {
        id: 17,
        title: "VNET Creative",
        image: "/VNET.png",
        tags: ["Brand Identity"],
      },
    ],
  },
  
];

/* ================= COMPONENT ================= */

export default function ProjectGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Freelanced <span className="text-primary">Works</span>
        </motion.h2>

        {categories.map((section) => (
          <div key={section.key} className="mb-20">

            <h3 className="text-3xl font-semibold text-white mb-8">
              {section.title}
            </h3>

            <div
              className={
                section.layout === "landscape"
                  ? "grid grid-cols-1 gap-8"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              }
            >
              {section.projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -6 }}
                  className="group rounded-xl overflow-hidden bg-black/60 p-3"
                >
                  {/* MEDIA */}
                  {project.youtube ? (
                    <button
                      onClick={() => setActiveVideo(project.youtube!)}
                      className="relative w-full rounded-lg overflow-hidden"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${project.youtube}/hqdefault.jpg`}
                        alt={project.title}
                        loading="lazy"
                        className="w-full rounded-lg"
                      />

                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/70 transition">
                        <PlayCircle className="w-16 h-16 text-white" />
                      </div>
                    </button>
                  ) : project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg"
                    />
                  )}

                  {/* CONTENT */}
                  <div className="pt-4">
                    <div className="flex gap-2 mb-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="bg-primary/20 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {project.title}
                    </h4>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground flex items-center gap-2 hover:text-primary"
                      >
                        Watch on YouTube
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🎬 VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative w-full max-w-5xl aspect-video"
            >
              <iframe
  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=1&playsinline=1&rel=0`}
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
  className="w-full h-full rounded-xl"
/>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
