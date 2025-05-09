import React, { useEffect } from "react";
import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <main id="smooth-wrapper">
      <div id="smooth-content">
        <div className="relative min-h-dvh overflow-x-hidden">
          <Hero />
          <section className="bg-blue-75 relative z-[0] min-h-screen"></section>
        </div>
      </div>
    </main>
  );
}

export default App;
