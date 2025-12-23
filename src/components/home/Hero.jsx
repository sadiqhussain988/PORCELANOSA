import React from 'react';
import { ArrowRight, Zap, Trophy, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              Revolutionizing Personal Fitness
            </div>
            
            <h1 className="text-5xl md:text-5xl font-black leading-none tracking-tight">
              EVOLVE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                STRENGTH
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              Experience the fusion of world-class training techniques and advanced AI technology. Personalized to your DNA, optimized for your results.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-bold text-lg transition-all group active:scale-95 shadow-xl shadow-indigo-600/20">
                Start Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white px-5 py-2 rounded-full font-bold text-lg transition-all active:scale-95">
                View Programs
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-900">
              <div>
                <p className="text-3xl font-bold">15K+</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Trainers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Results</p>
              </div>
            </div>
          </div>

          <div className="relative group hidden lg:block">
             <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl -rotate-3 transition-transform group-hover:-rotate-6" />
             <div className="absolute inset-0 bg-purple-500/10 rounded-3xl rotate-2 transition-transform group-hover:rotate-4" />
             <img 
               src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000" 
               alt="Athlete" 
               className="relative rounded-3xl shadow-2xl hover:grayscale-0 transition-all duration-700 object-cover w-full h-[420px]"
             />
             
             {/* Floating Info Cards */}
             <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-2xl border border-zinc-800 shadow-2xl animate-float">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-indigo-500/20 rounded-lg">
                   <Zap className="w-5 h-5 text-indigo-400" />
                 </div>
                 <div>
                   <p className="text-xs text-zinc-500 font-bold uppercase">Workouts</p>
                   <p className="text-sm font-bold">Plan Optimized</p>
                 </div>
               </div>
             </div>

             <div className="absolute top-12 -right-6 bg-zinc-900 p-4 rounded-2xl border border-zinc-800 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-pink-500/20 rounded-lg">
                   <Trophy className="w-5 h-5 text-pink-400" />
                 </div>
                 <div>
                   <p className="text-xs text-zinc-500 font-bold uppercase">Daily Goal</p>
                   <p className="text-sm font-bold">85% Completed</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
