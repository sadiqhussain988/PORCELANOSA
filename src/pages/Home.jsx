// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Programs from '../components/home/Programs';
import Testimonials from '../components/home/Testimonials';

function Home() {
  return (
    <div className="bg-zinc-900 text-white">
      <Hero />
      <Features />
      <Programs />
      <Testimonials />
    </div>
  );
}

export default Home;
