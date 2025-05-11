import React, { useEffect } from "react";
import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Universe from "./components/Universe";
import WhoWeAre from "./components/WhoWeAre";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <main id="smooth-wrapper">
      <div id="smooth-content">
        <div className="relative min-h-dvh overflow-x-hidden">
          <Hero />
          <About />
          <Features />
          <Story />
          <Universe />
          <WhoWeAre />
        </div>
      </div>
    </main>
  );
}

export default App;
