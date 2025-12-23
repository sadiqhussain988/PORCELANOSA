import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 15000, label: "Active Members", suffix: "+" },
  { value: 1200, label: "Transformations", suffix: "+" },
  { value: 50, label: "Certified Coaches", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
];

const AchievementsSection = () => {
  return (
    <section className="relative py-28 px-6 bg-zinc-950 overflow-hidden">
      {/* Background blurs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-black mb-16 text-white"
          data-aos="fade-up"
        >
          Our Achievements
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="
                relative group bg-white/5 backdrop-blur-xl border border-white/10
                p-10 rounded-3xl flex flex-col items-center justify-center
                hover:-translate-y-4 hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.6)]
                transition-all duration-500
              "
              whileHover={{ scale: 1.05 }}
            >
              {/* Gradient glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              {/* Counter */}
              <motion.p
                className="text-5xl md:text-6xl font-black text-indigo-500 relative z-10"
                initial={{ count: 0 }}
                whileInView={{ count: s.value }}
                transition={{ duration: 1.5 }}
              >
                {s.value.toLocaleString()}{s.suffix}
              </motion.p>

              <p className="relative z-10 mt-2 text-zinc-400 font-medium">{s.label}</p>

              {/* Shine effect */}
              <span className="absolute inset-0 rounded-3xl overflow-hidden">
                <span className="absolute -left-full top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
