import React from "react";

const coaches = [
  {
    name: "Alex Morgan",
    role: "Strength Coach",
    exp: "10+ Years Experience",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sarah Lee",
    role: "Fat Loss Expert",
    exp: "NASM Certified",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "David Kim",
    role: "Sports Trainer",
    exp: "500+ Transformations",
    image: "https://i.pravatar.cc/150?img=22",
  },
];

const CoachesSection = () => {
  return (
    <section className="relative py-28 px-6 bg-zinc-950 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-black mb-16 text-center text-white"
          data-aos="fade-up"
        >
          Train With Elite Coaches
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coaches.map((c, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 120}
              className="
                relative group bg-white/5 backdrop-blur-xl border border-white/10
                p-8 rounded-3xl text-center hover:-translate-y-4 
                hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.6)]
                transition-all duration-500
              "
            >
              {/* Gradient Ring / Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              {/* Coach Image */}
              <div className="relative z-10 w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-lg">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>

              {/* Text Info */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-1">
                {c.name}
              </h3>
              <p className="relative z-10 text-indigo-400 font-medium">{c.role}</p>
              <p className="relative z-10 text-zinc-400 text-sm mt-2">{c.exp}</p>

              {/* Floating shine sweep */}
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

export default CoachesSection;
