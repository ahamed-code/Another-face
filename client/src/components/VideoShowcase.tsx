import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export default function VideoShowcase() {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <section id="showcase" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Show<span className="text-secondary">case</span>
          </h2>
          <p className="text-muted-foreground font-tech">Cinematic Edits & Visual Effects</p>
        </motion.div>

        {/* Short Form / Reel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-xl -z-10 group-hover:opacity-40 transition-opacity" />
            <Card className="glass-card overflow-hidden aspect-video relative border-none">
              {/* Placeholder for YouTube Embed */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="fill-white text-white ml-1" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=1000&auto=format&fit=crop" 
                alt="Reel Thumbnail" 
                className="w-full h-full object-cover"
              />
            </Card>
            <h3 className="mt-4 text-2xl font-display text-white">2025 Showreel</h3>
            <p className="text-sm text-primary font-tech">Highlighting the best moments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display text-white">Before & After</h3>
            <p className="text-muted-foreground">
              Experience the power of color grading and VFX. Slide to see the raw footage vs the final cinematic grade.
            </p>

            {/* Comparison Slider */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Before" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-4 left-4 bg-black/50 px-2 py-1 rounded text-xs font-mono text-white">RAW</div>
              </div>
              
              <div 
                className="absolute inset-0 overflow-hidden border-r-2 border-primary"
                style={{ width: `${sliderValue[0]}%` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=1000&auto=format&fit=crop" 
                  alt="After" 
                  className="w-full h-full object-cover"
                />
                 <div className="absolute top-4 right-4 bg-primary/80 px-2 py-1 rounded text-xs font-mono text-black font-bold">GRADED</div>
              </div>

              {/* Slider Control */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                 <Slider 
                   defaultValue={[50]} 
                   max={100} 
                   step={1} 
                   className="w-full h-full opacity-0 cursor-ew-resize absolute z-20" 
                   onValueChange={setSliderValue}
                 />
              </div>
              
              {/* Handle Visual */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10 pointer-events-none"
                style={{ left: `calc(${sliderValue[0]}% - 16px)` }}
              >
                <Maximize2 className="w-4 h-4 text-black rotate-45" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
