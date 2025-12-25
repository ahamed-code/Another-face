import { motion } from "framer-motion";

/* =======================
   SOFTWARE (LOGO ORBS)
======================= */

const software = [
  {
    name: "After Effects",
    gradient: "from-purple-600 to-pink-500",
    logo: "/ae.svg",
  },
  {
    name: "Premiere Pro",
    gradient: "from-indigo-600 to-blue-500",
    logo: "/pr.svg",
  },
  {
    name: "CapCut",
    gradient: "from-emerald-600 to-teal-500",
    logo: "/capcut.svg",
  },
  {
    name: "Canva",
    gradient: "from-cyan-600 to-sky-500",
    logo: "/canva.svg",
  },
];

/* =======================
   CREATIVE SKILLS
======================= */

const creativeSkills = [
  {
    title: "Storytelling",
    concepts: ["Narrative Flow", "Emotional Cuts", "Pacing"],
    tools: ["Premiere Pro", "After Effects"],
  },
  {
    title: "Jump Cuts",
    concepts: ["Fast Transitions", "Retention Editing", "Short-form Reels"],
    tools: ["CapCut", "Premiere Pro"],
  },
  {
    title: "Beat Sync Editing",
    concepts: ["Music Sync", "Rhythm Cuts", "Velocity"],
    tools: ["After Effects", "CapCut"],
  },
  {
    title: "Motion Graphics",
    concepts: ["Lower Thirds", "Titles", "Kinetic Text"],
    tools: ["After Effects", "Canva"],
  },
  {
    title: "Interactivity",
    concepts: ["Visual Hooks", "Callouts", "Animated Elements"],
    tools: ["After Effects", "Canva"],
  },
];

export default function SkillShowcase() {
  return (
    <section id="skills" className="relative py-28 bg-background overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Crafting modern cinematic edits with precision
          </p>
        </motion.div>

        {/* SOFTWARE SECTION */}
<h3 className="text-3xl font-semibold text-white mb-12">
  Software Expertise
</h3>

{/* MOBILE: GRID */}
<div className="grid grid-cols-2 gap-10 mb-20 md:hidden">
  {software.map((tool) => (
    <div key={tool.name} className="text-center">
      <div className="relative mx-auto w-24 h-24 rounded-full">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${tool.gradient}`} />
        <img
          src={tool.logo}
          alt={tool.name}
          className="relative z-10 w-full h-full object-cover rounded-full"
        />
      </div>
      <p className="text-white mt-3 text-sm font-semibold">{tool.name}</p>
    </div>
  ))}
</div>

{/* DESKTOP: FLOATING ORBS */}
<div className="relative h-[420px] mb-32 perspective-[1200px] hidden md:block">
  {software.map((tool, index) => (
    <motion.div
      key={tool.name}
      className="absolute"
      animate={{
        y: [0, -26, 0],
        rotateZ: [0, 3, -3, 0],
      }}
      transition={{
        duration: 8 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        top: `${18 + index * 16}%`,
        left: `${16 + index * 18}%`,
      }}
    >

              {/* ORB */}
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotateX: -12,
                  rotateY: 12,
                }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative w-36 h-36 rounded-full flex items-center justify-center transform-gpu"
              >
                {/* OUTER WHITE GLOW */}
                <div className="absolute -inset-5 rounded-full bg-white/25 blur-3xl" />

                {/* GRADIENT BODY */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${tool.gradient}
                  shadow-[0_40px_80px_rgba(0,0,0,0.75)]`}
                />

                {/* INNER DEPTH */}
                <div className="absolute inset-1 rounded-full bg-white/10 blur-md" />

                {/* SHINE */}
                <div className="absolute top-3 left-4 w-24 h-24 rounded-full bg-white/30 blur-2xl opacity-70" />

                {/* ICON (ZOOMED & 3D) */}
                {/* LOGO CONTAINER (MASKED CIRCLE) */}
<motion.div
  className="relative z-10 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
  initial={{ scale: 1.1 }}
  whileHover={{ scale: 1.35 }}
  transition={{ type: "spring", stiffness: 120 }}
  style={{
    transform: "translateZ(45px)",
  }}
>
  {/* LOGO IMAGE */}
  <img
    src={tool.logo}
    alt={tool.name}
    className="w-full h-full object-cover"
    style={{
      filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.6))",
    }}
  />

  {/* INNER DARK VIGNETTE */}
  <div className="absolute inset-0 rounded-full bg-black/20" />

  {/* GLASS HIGHLIGHT */}
  <div className="absolute top-2 left-2 w-16 h-16 rounded-full bg-white/25 blur-xl" />
</motion.div>
 

              </motion.div>

              <p className="text-center text-white mt-4 text-sm font-semibold tracking-wide">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CREATIVE SKILLS */}
        <h3 className="text-3xl font-semibold text-white mb-12">
          Creative Editing Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creativeSkills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-black/40 backdrop-blur-xl
                border border-white/10 rounded-2xl p-6
                hover:border-primary/60 transition-all
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute -inset-1 rounded-2xl bg-primary/10 blur-xl opacity-0 hover:opacity-100 transition-opacity" />

              <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                {skill.title}
              </h4>

              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {skill.concepts.map((concept) => (
                  <span
                    key={concept}
                    className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                  >
                    {concept}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground relative z-10">
                Tools used:
                <span className="text-white font-medium ml-2">
                  {skill.tools.join(", ")}
                </span>
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
