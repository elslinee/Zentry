import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });
    tl.from(".contact-img-1", {
      opacity: 0,
      y: -100,
      duration: 0.6,
      ease: "power2.inOut",
    });
    tl.from(".contact-img-2", {
      opacity: 0,
      y: 100,
      duration: 0.6,
      ease: "power2.inOut",
    });
    tl.from(
      ".contact-img-3",
      {
        opacity: 0,
        y: 100,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0.5,
    );
  }, []);
  return (
    <section id="contact" className="lg:mx-12  mx-8 lg:mb-16 mb-8 lg:h-[680px] h-[500px] rounded-lg bg-black">
      <div className="relative h-full w-full">
        <div className="relative z-[1] mx-auto flex h-full w-fit flex-col items-center justify-center gap-5">
          <span className="about-welcome text-blue-75 font-general flex w-full items-center justify-center text-center text-xs font-medium uppercase">
            Join Zentry
          </span>
          <AnimatedTitle reverse={true} className="mb-8 lg:px-0 px-4">
            <h2 className="font-zentry about-title special-font  text-blue-75 m-0 mx-auto justify-center p-0 text-center text-[clamp(50px,8vw,120px)] leading-[clamp(60px,8vw,100px)] font-black">
              let’s b<b>u</b>ild the <br /> new era of g<b>a</b>ming <br /> t
              <b>o</b>gether.
            </h2>
          </AnimatedTitle>
          <Button
            title={"Contact Us"}
            containerClass={"!bg-blue-75 !text-black"}
          />
          <div className="absolute bottom-0 -left-70 hidden h-full flex-col items-start justify-between gap-5 overflow-hidden lg:flex">
            <img
              style={{
                clipPath: "polygon(0 0, 100% 0, 84% 81%, 15% 91%)",
              }}
              src="/img/contact-1.webp"
              alt=""
              className="contact-img-1 size-60 -translate-y-10 object-cover"
            />
            <img
              style={{
                clipPath: "polygon(19% 14%, 100% 38%, 80% 100%, 5% 100%)",
              }}
              src="/img/contact-2.webp"
              alt=""
              className="contact-img-2 size-70 translate-y-15 object-cover"
            />
          </div>
        </div>
        <div className="contact-img-3 z-[0]  absolute -top-15 right-0">
          <img
            style={{
              clipPath: "polygon(13% 0, 79% 27%, 70% 90%, 3% 90%)",
            }}
            src="/img/swordman.webp"
            alt=""
            className="w-[300px] lg:w-[500px] "
          />
          <img
            src="/img/swordman-partial.webp"
            alt=""
            className="absolute top-0 w-[300px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
