import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FourPillarsSection from "./components/FourPillarsSection";
import ScheduleSection from "./components/ScheduleSection";
import ProjectCarousel from "./components/ProjectCarousel";
import TestimonialSection from "./components/Testimonialsection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FourPillarsSection />
      <ScheduleSection />
      <ProjectCarousel />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
