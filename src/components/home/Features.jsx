// src/components/home/Features.jsx
import React from 'react';
import { ShieldCheck, Zap, Trophy } from 'lucide-react';

const featuresData = [
  {
    title: "Personalized Workouts",
    description: "AI-powered plans tailored exactly to your body and goals.",
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
  {
    title: "Safe Training",
    description: "Scientifically backed methods designed for injury-free progress.",
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
  {
    title: "Goal Tracking",
    description: "Track workouts, nutrition, and performance in real time.",
    icon: <Trophy className="w-8 h-8 text-pink-400" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.map((feature, idx) => (
          <div
            key={idx}
            className="relative group h-80 rounded-2xl overflow-hidden bg-zinc-800 shadow-xl"
          >
            {/* IMAGE (default view) */}
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-20"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-500" />

            {/* TEXT CONTENT (hidden → visible on hover) */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-300">{feature.description}</p>
            </div>

            {/* TITLE AT BOTTOM (visible before hover) */}
            <div className="absolute bottom-0 w-full p-4 text-center bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
