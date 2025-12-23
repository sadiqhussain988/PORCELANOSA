// src/components/About/ValuesSection.jsx
import React from "react";
import { Dumbbell, ShieldCheck, HeartPulse, Trophy } from "lucide-react";

const values = [
  {
    icon: Dumbbell,
    title: "Discipline",
    desc: "Consistency, structure, and commitment build elite physiques.",
  },
  {
    icon: HeartPulse,
    title: "Performance",
    desc: "Data-driven training that maximizes strength and endurance.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Safe, science-backed methods with zero shortcuts.",
  },
  {
    icon: Trophy,
    title: "Results",
    desc: "Every rep, every session — measurable progress.",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-28 px-6 bg-zinc-950 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <h2
          className="text-4xl text-white md:text-5xl font-black mb-16 text-center"
          data-aos="fade-up"
        >
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 120}
              className="
                group relative bg-white/5 backdrop-blur-xl
                border border-white/10
                p-8 rounded-3xl text-center
                hover:-translate-y-4 hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.6)]
                transition-all duration-500
              "
            >
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <v.icon className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>

              {/* Text */}
              <h3 className="relative text-white z-10 text-2xl font-bold mb-3">
                {v.title}
              </h3>
              <p className="relative z-10 text-zinc-400 leading-relaxed">
                {v.desc}
              </p>

              {/* Shine sweep */}
              <span className="absolute inset-0 rounded-3xl overflow-hidden">
                <span className="absolute -left-full top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
