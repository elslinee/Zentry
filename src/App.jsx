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
import { useGSAP } from "@gsap/react";

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
  useGSAP(() => {
    const universe = document.querySelector("#universe");
    const story = document.querySelector("#story");
    const storyText = document.querySelector("#story .gsap-story-text p");
    const storyBtn = document.querySelector("#story .gsap-story-text button");
    const whoWeAre = document.querySelector("#who-we-are");

    const scrollTriggerUniverse = {
      trigger: universe,
      start: "-200px center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      markers: true,
    };
    gsap.to(story, {
      backgroundColor: "#edff66",
      duration: 0.1,
      ease: "none",
      scrollTrigger: scrollTriggerUniverse,
    });

    gsap.from(universe, {
      backgroundColor: "#000",
      duration: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: universe,
        start: "-200px center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        markers: true,
        onLeave: () => {
          gsap.to(universe, {
            backgroundColor: "#dfdff2",
            duration: 0.1,
          });
        },
      },
    });

    gsap.to(storyText, {
      color: "#000",
      duration: 0.1,
      ease: "none",
      scrollTrigger: scrollTriggerUniverse,
    });
    gsap.to(storyBtn, {
      color: "#dfdff2",
      backgroundColor: "#000",
      duration: 0.1,
      ease: "none",
      scrollTrigger: scrollTriggerUniverse,
    });

    gsap.to(whoWeAre, {
      backgroundColor: "#edff66",
      duration: 0.1,
      ease: "none",
      scrollTrigger: scrollTriggerUniverse,
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
