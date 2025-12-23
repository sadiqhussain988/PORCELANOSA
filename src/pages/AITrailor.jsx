import React, { useState } from "react";
import {
  BrainCircuit,
  Loader2,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { generateWorkoutPlan } from "./geminiService";

const AITrainer = () => {
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("Beginner");
  const [equipment, setEquipment] = useState("Full Gym");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleGenerate = async () => {
    if (!goal) return;
    setLoading(true);
    try {
      const result = await generateWorkoutPlan(goal, experience, equipment);
      setPlan(result);
    } catch (err) {
      alert(
        "Failed to generate plan. Please ensure your API key is configured."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="ai-trainer"
      className="relative py-28 px-6 bg-zinc-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold uppercase tracking-wider">
            <BrainCircuit className="w-4 h-4" /> Powered by Gemini
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-white">
            YOUR PRIVATE AI COACH
          </h2>
          <p className="text-zinc-400">
            Describe your fitness goals and our neural engine will craft the
            ultimate training blueprint for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Input Form */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase">
                  Primary Goal
                </label>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g., Build strength and increase vertical jump"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 uppercase">
                    Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 uppercase">
                    Equipment
                  </label>
                  <select
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white"
                  >
                    <option>Full Gym</option>
                    <option>Home Gym</option>
                    <option>Bodyweight</option>
                    <option>Minimalist</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !goal}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-800 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing Data...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Protocol
                  </>
                )}
              </button>
            </motion.div>

            <motion.div
              className="p-6 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-3xl border border-indigo-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h5 className="font-bold flex items-center gap-2 mb-4 text-white">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" /> Why AI
                Training?
              </h5>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  Dynamic adjustments based on equipment availability.
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  Structured progressive overload cycles.
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  Nutritional pairing for maximum recovery.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Generated Plan */}
          <div className="lg:col-span-7">
            {plan ? (
              <motion.div
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-8 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                {/* plan content */}
              </motion.div>
            ) : (
              <motion.div
                className="relative h-full min-h-[400px] border-2 border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-center p-12 group overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="bg-zinc-900 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-12 h-12 text-zinc-700 group-hover:text-indigo-500 transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">
                  Awaiting Parameters
                </h4>
                <p className="text-zinc-400 max-w-sm">
                  Complete the form to initiate the neural workout synthesis.
                  Your custom plan will appear here.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrainer;
