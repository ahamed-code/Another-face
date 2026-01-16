import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Achievements & <span className="text-primary">Contributions</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Leadership, creativity, and real-world impact
          </p>
        </motion.div>

        {/* IMAGE SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.85)]">
            <img
              src="/MULTI PIC.jpg"
              alt="College Multimedia Team Contributions"
              className="w-full aspect-video object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/40" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Multimedia Team – Creative Contributions
              </h3>
              <p className="text-sm text-muted-foreground">
                Events • Reels • Promotions • Leadership
              </p>
            </div>
          </div>
        </motion.div>

        {/* COORDINATOR IMAGE + DESCRIPTION (UNCHANGED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          {/* COORDINATOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" />
            <img
              src="/MAGCOR.jpg"
              alt="Multimedia Team Coordinator"
              className="relative rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Multimedia Team Coordinator
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Served as the{" "}
                  <span className="text-white font-medium">
                    College Multimedia Team Coordinator
                  </span>
                  , leading creative production for college events, branding,
                  and digital promotions.
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Led video editing & motion graphics for major events</li>
                  <li>• Coordinated editors, designers & videographers</li>
                  <li>• Produced high-retention short-form & cinematic reels</li>
                  <li>• Strengthened college digital presence & branding</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      {/* 🔥 ACTUAL CERTIFICATES SECTION (NEW & BELOW) */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h3 className="text-3xl font-semibold text-white text-center mb-16">
    Certificates & Recognition
  </h3>

  {/* ⭐ FEATURED MAGAZINE CERTIFICATES */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto mb-24">
    {[
      {
        src: "/MAG CERTI.jpg",
        title: "Creative Excellence Award",
        desc: "Featured magazine recognition for outstanding multimedia work",
      },
      {
        src: "/ORG MULTI.jpg", // 👈 second mag cert
        title: "Media Leadership Recognition",
        desc: "Magazine feature for creative leadership & contributions",
      },
    ].map((cert, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative text-center"
      >
        {/* Glow */}
        <div className="absolute -inset-4 rounded-3xl bg-primary/30 blur-3xl" />

        {/* Image */}
        <img
          src={cert.src}
          alt={cert.title}
          className="relative rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.85)] mx-auto"
        />

        {/* Text */}
        <div className="mt-6">
          <h4 className="text-2xl font-bold text-white">
            {cert.title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            {cert.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* 📄 OTHER CERTIFICATES */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
    {[
      {
        src: "/MAG2.jpg",
        title: "Multimedia Team Coordinator",
        desc: "Leadership & creative direction certificate",
      },
      {
        src: "/MAG3.jpg",
        title: "College Media Contribution",
        desc: "Event coverage & digital promotions",
      },
    ].map((cert, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative text-center"
      >
        {/* Glow */}
        <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-xl" />

        {/* Image */}
        <img
          src={cert.src}
          alt={cert.title}
          className="relative rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] mx-auto"
        />

        {/* Text */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-white">
            {cert.title}
          </h4>
          <p className="text-sm text-muted-foreground">
            {cert.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>



      </div>
    </section>
  );
}
