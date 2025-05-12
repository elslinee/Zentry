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
import Footer from "./components/Footer";
import Contact from "./components/Contact";

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
    const storyText = document.querySelector("#story .gsap-story-text p");
    const storyBtn = document.querySelector("#story .gsap-story-text button");
    const suwContainer = document.querySelector("#suw-container");
    const mainScrollTrigger = {
      trigger: "#universe",
      start: "-200px center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      markers: false,
      onEnter: () => {
        suwContainer.style.backgroundColor = "#edff66";
        storyText.style.color = "#000";
        storyBtn.style.backgroundColor = "#000";
        storyBtn.style.color = "#dfdff2";
      },
      onLeave: () => {
        suwContainer.style.backgroundColor = "#000";
        storyText.style.color = "#dfdff2";
        storyBtn.style.backgroundColor = "#dfdff2";
        storyBtn.style.color = "#000";
      },
      onEnterBack: () => {
        suwContainer.style.backgroundColor = "#edff66";
        storyText.style.color = "#000";
        storyBtn.style.backgroundColor = "#000";
        storyBtn.style.color = "#dfdff2";
      },
      onLeaveBack: () => {
        suwContainer.style.backgroundColor = "#000";
        storyText.style.color = "#dfdff2";
        storyBtn.style.backgroundColor = "#dfdff2";
        storyBtn.style.color = "#000";
      },
    };
    const whoWeAreTrigger = {
      trigger: "#who-we-are",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      markers: false,
      onEnter: () => {
        suwContainer.style.backgroundColor = "#dfdff2";
      },
      onLeave: () => {
        suwContainer.style.backgroundColor = "#dfdff2";
      },
      onEnterBack: () => {
        suwContainer.style.backgroundColor = "#dfdff2";
      },
      onLeaveBack: () => {
        suwContainer.style.backgroundColor = "#edff66";
      },
    };
    gsap.timeline({
      scrollTrigger: mainScrollTrigger,
    });
    gsap.timeline({
      scrollTrigger: whoWeAreTrigger,
    });
  }, []);

  return (
    <main id="smooth-wrapper">
      <div id="smooth-content">
        <div className="relative min-h-dvh overflow-x-hidden">
          <Hero />
          <About />
          <Features />
          <div id="suw-container" className="bg-black overflow-hidden">
            <Story />
            <Universe />
            <WhoWeAre />
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
