// src/components/home/Testimonials.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John D.",
    feedback: "Amazing results! My strength improved in just 3 months.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    name: "Sarah W.",
    feedback: "The AI plans are so personalized, I finally hit my goals.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
  },
  {
    name: "Mike R.",
    feedback: "Best fitness platform I've used. Highly recommend.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4,
  },
];

const Testimonials = () => (
  <section className="relative py-24 px-4 max-w-7xl mx-auto">
    
    {/* Background glow */}
    <div className="absolute top-1/3 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

    <h2 className="relative text-4xl md:text-5xl font-black text-center mb-16">
      What Our Members Say
    </h2>

    <div className="relative grid md:grid-cols-3 gap-10">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="
            group bg-white/5 backdrop-blur-xl
            border border-white/10
            p-8 rounded-3xl shadow-xl
            hover:-translate-y-3 hover:shadow-2xl
            transition-all duration-500
          "
        >
          {/* Quote Icon */}
          <Quote className="w-8 h-8 text-indigo-400 mb-4 opacity-60" />

          {/* Feedback */}
          <p className="text-zinc-300 leading-relaxed mb-6">
            “{t.feedback}”
          </p>

          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-600'
                }`}
              />
            ))}
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 rounded-full border-2 border-indigo-500/40"
            />
            <div>
              <p className="font-bold text-white">{t.name}</p>
              <p className="text-sm text-zinc-400">Verified Member</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
