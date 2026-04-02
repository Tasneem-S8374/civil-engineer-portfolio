import React, { useEffect } from "react";
import AOS from "aos";
import NavbarSection from "./components/NavbarSection";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <ParticlesBackground />
      <NavbarSection />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Plans />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
