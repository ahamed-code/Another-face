import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import pro from "../../public/PROFILE.png";

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* -------------------------------------- */}
          {/* LEFT TEXT CONTENT */}
          {/* -------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              About <span className="text-primary">Me</span>
            </h2>

            <Card className="glass-card p-8 border-l-4 border-l-primary/50">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-tech">
                I’m a dedicated <span className="text-white font-semibold">Short-Form Content Creator</span>
                {" "}and{" "}
                <span className="text-white font-semibold">Short Film Editor</span> who blends
                trends with storytelling. I craft fast-paced, impactful edits that connect instantly —
                from viral reels to emotional visual narratives. My passion lies in turning ideas
                into engaging cinematic moments that stay with the viewer.
              </p>

              {/* Experience & Projects */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-primary font-display">Experience</h4>
                  <p className="text-sm text-muted-foreground">2+ Years in VFX & Video Editing</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-secondary font-display">Projects</h4>
                  <p className="text-sm text-muted-foreground">10+ Completed Projects</p>
                </div>
              </div>

              {/* Glowing Skill Tags */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { name: "Video Editing", color: "from-pink-500 to-rose-500" },
                  { name: "VFX Artist", color: "from-purple-500 to-indigo-500" },
                  { name: "Graphic Designing", color: "from-blue-500 to-cyan-500" },
                  { name: "Short-form Creator", color: "from-amber-500 to-orange-500" },
                ].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className={`
                      px-4 py-2 rounded-full text-sm font-tech text-white
                      bg-linear-to-r ${skill.color}
                      shadow-[0_0_18px_rgba(255,255,255,0.5)]
                      animate-pulse
                    `}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>

            </Card>
          </motion.div>

          {/* -------------------------------------- */}
          {/* RIGHT SIDE PHOTO WITH 3D EFFECT */}
          {/* -------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="p-1 rounded-[30px] bg-linear-to-br from-primary/40 to-secondary/40 shadow-2xl"
            >
              <img
                src={pro}
                alt="My Photo"
                className="rounded-[25px] w-80 md:w-96 object-cover shadow-xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
