import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/about/HeroSection";
import StorySection from "../components/about/StorySection";
import ValuesSection from "../components/about/ValuesSection";
import CoachesSection from "../components/about/CoachesSection";
import AchievementsSection from "../components/about/AchievementsSection";



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  


  return (
    <div className="min-h-screen bg-white text-gray-800">
      <HeroSection />
      
        <StorySection  />
        <ValuesSection />
        <CoachesSection />
        <AchievementsSection />
       
      
    </div>
  );
}