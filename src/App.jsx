import About from "./Components/About/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import gsap from "gsap";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      gsap.to(particle, {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    });
  }, []);

  return (
    <div>
      {/* Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
