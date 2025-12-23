import React from "react";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section
      className="relative "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {/* Shine Animation */}
      <style>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
        }
        .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          animation: shineMove 3.5s infinite;
        }
        @keyframes shineMove {
          0% { left: -100%; }
          60% { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950  shadow-2xl p-6 sm:p-12 flex flex-col sm:flex-row items-center gap-12 relative overflow-hidden border border-zinc-800">

        {/* Ambient Glow */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-indigo-600/20 rounded-full blur-3xl opacity-40"></div>

        {/* IMAGE SECTION */}
        <motion.div
          className="sm:w-1/2 relative shine-wrapper"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>

          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
            alt="Elite gym training"
            className="rounded-2xl shadow-2xl w-full h-[360px] object-cover border border-zinc-700  hover:grayscale-0 transition-all duration-700"
          />

          <span className="shine"></span>

          {/* Floating Badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg shadow text-sm text-zinc-300 border border-zinc-700">
            Transforming lives since{" "}
            <span className="font-bold text-indigo-400">2012</span>
          </div>
        </motion.div>

        {/* CONTENT SECTION */}
        <motion.div
          className="sm:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Our Story
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full my-5"></div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            Founded with a relentless passion for transformation,{" "}
            <span className="text-white font-semibold">AURAFIT</span> was built
            to redefine what a gym experience should be. We began as a focused
            training space for serious individuals — and evolved into a
            performance-driven fitness ecosystem.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-5">
            Our philosophy is simple:{" "}
            <span className="text-white font-semibold">
              discipline, science, and consistency
            </span>. We combine elite coaching, intelligent programming, and
            world-class equipment to deliver real, measurable results — no
            shortcuts, no gimmicks.
          </p>

          <blockquote className="border-l-4 border-indigo-500 pl-5 italic text-zinc-300 my-6">
            “We don’t chase trends — we build strength, confidence, and
            discipline that lasts a lifetime.”
          </blockquote>

          <p className="text-zinc-400 leading-relaxed">
            From first-time lifters to competitive athletes, we’ve helped
            thousands unlock their strongest version — physically and mentally.
            The results speak for themselves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
