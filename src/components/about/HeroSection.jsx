// src/components/About/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] mt-19  flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a')] bg-cover bg-center " />
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-4xl" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Built to Transform <br />
          <span className="text-indigo-500">Bodies & Minds</span>
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl mb-8">
          More than a gym — a performance-driven fitness ecosystem designed
          for real, lasting results.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 text-white bg-indigo-600 rounded-full font-bold hover:bg-indigo-700 transition">
            Join the Movement
          </button>
          <button className="px-8 py-4  text-white border border-zinc-700 rounded-full font-bold hover:bg-zinc-800 transition">
            Meet Our Coaches
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
