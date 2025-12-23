// src/pages/Pricing.jsx
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "Access to all gym equipment",
      "1 group class per week",
      "Free fitness assessment",
    ],
  },
  {
    name: "Pro",
    price: "$59",
    features: [
      "Unlimited gym access",
      "3 group classes per week",
      "Personalized workout plan",
      "Nutrition guidance",
    ],
  },
  {
    name: "Elite",
    price: "$99",
    features: [
      "All Pro features",
      "Unlimited group classes",
      "1-on-1 coaching sessions",
      "Priority support & advanced tracking",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 text-white min-h-screen py-32 px-6 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Membership Plans</h2>
        <p className="text-zinc-400 text-lg">
          Flexible options for every fitness goal. Choose the plan that best fits your journey.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-zinc-900 rounded-3xl p-8 shadow-2xl hover:shadow-2xl hover:scale-105 transition-transform border border-zinc-800 min-h-[350px]"
          >
            {/* Badge */}
            {plan.name === "Pro" && (
              <div className="absolute -top-3 -right-3 bg-indigo-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                Most Popular
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-indigo-500">{plan.price}/mo</p>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-indigo-500" />
                    <span className="text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all active:scale-95">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto mt-28 text-center relative z-10">
        <h3 className="text-4xl font-bold mb-4">Not sure which plan to pick?</h3>
        <p className="text-zinc-400 mb-6">
          Contact our fitness experts today and we'll guide you to the perfect plan.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Pricing;
