import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".mask-clip-path", {
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800px center",
        scrub: 0.5,
        markers: false,
        pin: true,
        pinSpacing: true,
      },
      clipPath: "polygon(38% 9%, 55% 12%, 59% 57%, 39% 67%)",
      borderRadius: "0",
    });
    gsap.to(".about-image img", {
      scale: 1,
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800px center",
        scrub: 0.5,
        markers: false,
      },
    });
  }, []);
  return (
    <div id="about" className="relative mt-24 w-screen md:mt-42">
      <div className="relative mb-8 flex flex-col items-center gap-5">
        <span className="about-welcome font-general flex w-full items-center justify-center text-center text-xs font-medium uppercase">
          Welcome to Zentry
        </span>
        <div className="about-title mx-auto justify-center leading-[clamp(60px,8vw,100px)]">
          <h2 className="font-zentry special-font m-0 p-0 text-center text-[clamp(60px,8vw,120px)] font-black text-black">
            Disc<b>o</b>ver the world's
          </h2>
          <h2 className="font-zentry special-font m-0 p-0 text-center text-[clamp(60px,8vw,120px)] font-black text-black">
            largest shared <b>a</b>dventure
          </h2>
        </div>
      </div>
      <div className="relative h-dvh w-screen" id="clip">
        <div className="absolute top-0 -left-14 z-[50] size-full">
          <img
            src="/img/about-bg.webp"
            className="relative size-full object-cover"
            alt="background"
          />
        </div>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          className="mask-clip-path about-image !size-full !rounded-none"
        >
          <img
            src="/img/about.webp"
            className="absolute top-0 left-0 size-full scale-150 object-cover"
            alt="background"
          />
        </div>
        <div className="absolute top-[700px] hidden w-full flex-col items-center justify-center gap-0 md:flex">
          <p className="text-xl text-nowrap">
            The Game of Games begins-your life, now an epic MMORPG
          </p>
          <p className="text-center opacity-55">
            Zentry is the unified play layer driving attention and contribution{" "}
            <br />
            through cross-world Al gamification.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
