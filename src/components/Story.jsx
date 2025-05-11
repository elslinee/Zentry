import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);

function Story() {
  const imageRef = useRef(null);
  useGSAP(() => {
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
      clipPath: "polygon(26% 9%, 68% 18%, 86% 64%, 10% 86%)",
    });
  });
  return (
    <section
      id="story"
      className="relative w-screen overflow-hidden bg-black pt-24 pb-32 md:pt-42 md:pb-0 lg:min-h-[135vh]"
    >
      <div className="relative flex flex-col items-center gap-5">
        <span className="about-welcome text-blue-75 font-general flex w-full items-center justify-center text-center text-xs font-medium uppercase">
          THE OPEN IP UNIVERSE
        </span>
        <AnimatedTitle reverse={true} className="">
          <h2 className="font-zentry about-title special-font text-blue-75 m-0 mx-auto justify-center p-0 text-center text-[clamp(60px,8vw,120px)] leading-[clamp(60px,8vw,100px)] font-black">
            The St<b>o</b>ry oF <br /> A Hidden Real<b>m</b>
          </h2>
        </AnimatedTitle>
      </div>
      <div
        ref={imageRef}
        className="size-screen relative [clip-path:polygon(26%_10%,_71%_20%,_90%_68%,_11%_86%)] lg:-translate-y-50"
      >
        <div className="absolute-center absolute !top-25 hidden flex-col items-center gap-5 lg:flex">
          <AnimatedTitle reverse={true} className="">
            <h2 className="font-zentry about-title special-font m-0 mx-auto justify-center p-0 text-center text-[clamp(60px,8vw,120px)] leading-[clamp(60px,8vw,100px)] font-black text-black">
              The St<b>o</b>ry oF <br /> A Hidden Real<b>m</b>
            </h2>
          </AnimatedTitle>
        </div>
        <div className="size-full bg-black">
          <img className="" src="/img/entrance.webp" alt="" />
        </div>
      </div>
      <div className="gsap-story-text right-40 bottom-50 px-6 md:absolute">
        <p className="text-blue-75 mb-8 max-w-[450px] text-start text-[18px] leading-[22px] font-medium capitalize">
          Where realms converge, lies Zentry and the boundless pillar. Discover
          its secrets and shape your fate amidst infinite opportunities.
        </p>
        <Button title={"Discover Prologue"} />
      </div>
      {""}
    </section>
  );
}

export default Story;
