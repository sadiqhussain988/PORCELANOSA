// src/components/home/Programs.jsx
import React from "react";

const programs = [
  {
    title: "Strength Training",
    description:
      "Build muscle, power, and functional strength with expert-led workouts.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
  {
    title: "Cardio & Endurance",
    description: "Boost stamina, burn calories, and improve heart health.",
    image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/36aa9552-e9c9-4a90-a382-64438075e30d/7-workouts-that-can-boost-your-aerobic-endurance%C2%A0.jpg",
  },
  {
    title: "Yoga & Flexibility",
    description: "Enhance flexibility, balance, and mental focus.",
    image: "https://img.freepik.com/free-photo/fitness-woman-stretching-doing-pilates-stretches-exercises_1153-7054.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "HIIT Training",
    description: "High-intensity interval workouts for maximum fat burn.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your fitness goals.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
  {
    title: "Weight Loss Program",
    description:
      "Scientifically designed plans to help you lose weight safely.",
    image: "https://www.parambodyfitmind.com/wp-content/uploads/2020/06/Womens-Beginner-Gym-Workout-Routine-For-Weight-Loss.jpg",
  },
  {
    title: "CrossFit",
    description:
      "Functional movements at high intensity for total-body fitness.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    title: "Nutrition Coaching",
    description: "Personalized diet plans to support training and recovery.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  },
  {
    title: "Rehabilitation & Recovery",
    description: "Injury recovery programs focused on mobility and strength.",
    image: "https://youfit.com/wp-content/uploads/2024/09/YouFit-Margate-10-30-23-25-Edit.jpg",
  },
];

const Programs = () => (
  <section className=" px-4 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {programs.map((program, idx) => (
        <div
          key={idx}
          className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{program.title}</h3>
            <p className="text-zinc-400">{program.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Programs;
