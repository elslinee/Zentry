import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function AnimatedTitle({ children, reverse = false, className, delay = 0 }) {
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const splitText = new SplitText(titleRef.current, { type: "lines" });
      gsap.from(splitText.lines, {
        delay: delay,
        y: 500,
        rotationY: -100,
        opacity: 0,
        transformOrigin: "left center",
        perspective: 1000,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",

        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: `play none none ${reverse ? "reverse" : "none"}`,
        },
      });
    },
    { scope: titleRef },
  );

  return (
    <div className={`${className}`}>
      <div
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        ref={titleRef}
        className={`"font-zentry special-font overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}

export default AnimatedTitle;
