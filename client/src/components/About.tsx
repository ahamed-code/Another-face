import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import SkillSpheres from "./canvas/SkillSpheres";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
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
                I am a passionate <span className="text-white font-semibold">Video Editor</span>,{" "}
                <span className="text-white font-semibold">VFX Artist</span>, and{" "}
                <span className="text-white font-semibold">Graphic Designer</span> who loves
                storytelling through visuals. I transform raw footage into cinematic experiences
                and static designs into living, breathing art.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-primary font-display">Experience</h4>
                  <p className="text-sm text-muted-foreground">5+ Years in Digital Arts</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-secondary font-display">Projects</h4>
                  <p className="text-sm text-muted-foreground">100+ Completed Projects</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 3D Skills Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full relative"
          >
             <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
             <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
               <ambientLight intensity={0.5} />
               <pointLight position={[10, 10, 10]} intensity={1} />
               <Suspense fallback={null}>
                 <SkillSpheres />
               </Suspense>
               <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
             </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
