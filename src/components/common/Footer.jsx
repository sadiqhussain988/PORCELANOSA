import React from 'react';
import { Dumbbell, Instagram, Twitter, Youtube, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16 animate-fadeIn">
          {/* Brand + Social */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg shadow-aura-glow">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                AURA<span className="text-indigo-500">FIT</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm">
              Pushing the boundaries of human performance through data-driven training and elite-level coaching.
            </p>
            <div className="flex gap-4 mt-2">
              {[Instagram, Twitter, Youtube, Github].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 bg-indigo-500  rounded-lg text-white transition-all duration-300 shadow-aura hover:shadow-aura-glow"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h6 className="font-bold uppercase text-xs tracking-widest text-indigo-500 mb-6">Experience</h6>
            <ul className="space-y-4 text-zinc-400 font-medium">
              {['Programs', 'Nutrition', 'AI Coach', 'Merch'].map((item, idx) => (
                <li key={idx}>
                  <a className="hover:text-white transition-colors duration-300" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold uppercase text-xs tracking-widest text-indigo-500 mb-6">Company</h6>
            <ul className="space-y-4 text-zinc-400 font-medium">
              {['About Us', 'Careers', 'Press', 'Impact'].map((item, idx) => (
                <li key={idx}>
                  <a className="hover:text-white transition-colors duration-300" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2">
            <h6 className="font-bold uppercase text-xs tracking-widest text-indigo-500 mb-6">Newsletter</h6>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email"
                className="flex-1 bg-zinc-900 text-white border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-all duration-300"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all duration-300 shadow-aura-glow">
                Join
              </button>
            </div>
            <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed">
              By subscribing, you agree to our Terms of Service and Privacy Policy. We promise not to spam.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-zinc-500">
          <p>© 2024 AURA FITNESS TECHNOLOGIES INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            {['PRIVACY POLICY', 'TERMS OF USE', 'COOKIE SETTINGS'].map((item, idx) => (
              <a key={idx} href="#" className="hover:text-indigo-500 transition-colors duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
