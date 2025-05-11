import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);

function Universe() {
  const [videoSrc, setVideoSrc] = useState(1);
  const src = (index) => `/videos/Blockchain_${index}.webm`;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".universe",
        start: "top center",
        end: "bottom center",
        scrub: false,
        markers: false,
      },
      onComplete: () => {
        tl.restart();
      },
    });
    const tl2 = gsap.timeline({});

    tl.to(".scrolling-container-1 .scrolling-bar", {
      duration: 1.5,
      height: "100%",
      onComplete: () => {
        tl2
          .to(".universe-video", {
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
              setVideoSrc(1);
            },
          })
          .to(".universe-video", {
            duration: 0.3,
            opacity: 1,
          });
      },
    })
      .to(".scrolling-container-2 .scrolling-bar", {
        duration: 1.5,
        height: "100%",
        onComplete: () => {
          tl2
            .to(".universe-video", {
              duration: 0.3,
              opacity: 0,
              onComplete: () => {
                setVideoSrc(2);
              },
            })
            .to(".universe-video", {
              duration: 0.3,
              opacity: 1,
            });
        },
      })
      .to(".scrolling-container-3 .scrolling-bar", {
        duration: 1.5,
        height: "100%",
        onComplete: () => {
          tl2
            .to(".universe-video", {
              duration: 0.3,
              opacity: 0,
              onComplete: () => {
                setVideoSrc(3);
              },
            })
            .to(".universe-video", {
              duration: 0.3,
              opacity: 1,
            });
        },
      });
  });
  return (
    <section
      id="universe"
      className="universe relative min-h-[100vh] w-full bg-yellow-300 py-32"
    >
      <div className="px-10">
        <AnimatedTitle reverse={true} className="pb-8">
          <h2 className="font-zentry about-title special-font m-0 mx-auto justify-start p-0 text-start text-[clamp(60px,8vw,150px)] leading-[clamp(60px,8vw,120px)] font-black text-black">
            the univ<b>e</b>rse <br /> powered by ZE<b>N</b>T
          </h2>
        </AnimatedTitle>
        <Button
          title={"Enter Value"}
          containerClass={"!bg-black !text-blue-75 !px-10"}
        />
        <div className="hidden flex-col gap-10 pt-20 lg:flex">
          <div className="scrolling-container-1 relative overflow-hidden pl-20 text-black">
            <div className="absolute top-0 left-0 h-full">
              <p className="mt-2 w-4 text-xs font-black">01</p>
              <div className="scrolling-main-bar absolute bottom-0 ml-1 flex h-[60%] w-[2px] bg-black/25">
                <div
                  style={{
                    height: "0%",
                  }}
                  className="scrolling-bar h-full w-full bg-black"
                ></div>
              </div>
            </div>
            <p className="title-p-text pb-4 text-2xl font-medium">
              {" "}
              Shaping Zentry Collectively
            </p>
            <p className="p-text max-w-[300px] overflow-hidden leading-[18px]">
              articipate in governance, influence key decisions in the
              ever-growing Zentry Universe that is limited only by people's
              imaginations
            </p>
          </div>{" "}
          <div className="scrolling-container-2 relative pl-20 text-black">
            <div className="absolute top-0 left-0 h-full">
              <p className="mt-2 w-4 text-xs font-black">01</p>
              <div className="absolute bottom-0 ml-1 flex h-[60%] w-[2px] bg-black/25">
                <div
                  style={{
                    height: "0%",
                  }}
                  className="scrolling-bar h-full w-full bg-black"
                ></div>
              </div>
            </div>
            <p className="pb-4 text-2xl font-medium">
              {" "}
              Shaping Zentry Collectively
            </p>
            <p className="max-w-[300px] leading-[18px]">
              articipate in governance, influence key decisions in the
              ever-growing Zentry Universe that is limited only by people's
              imaginations
            </p>
          </div>
          <div className="scrolling-container-3 relative pl-20 text-black">
            <div className="absolute top-0 left-0 h-full">
              <p className="mt-2 w-4 text-xs font-black">01</p>
              <div className="absolute bottom-0 ml-1 flex h-[60%] w-[2px] bg-black/25">
                <div
                  style={{
                    height: "0%",
                  }}
                  className="scrolling-bar h-full w-full bg-black"
                ></div>
              </div>
            </div>
            <p className="pb-4 text-2xl font-medium">
              {" "}
              Shaping Zentry Collectively
            </p>
            <p className="max-w-[300px] leading-[18px]">
              articipate in governance, influence key decisions in the
              ever-growing Zentry Universe that is limited only by people's
              imaginations
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 pt-20 lg:hidden">
          <div className="relative overflow-hidden pl-20 text-black">
            <div className="absolute top-0 left-0 h-full">
              <p className="mt-2 w-4 text-xs font-black">01</p>
              <div className="scrolling-main-bar absolute bottom-0 ml-1 flex h-[60%] w-[2px] bg-black/25">
                <div
                  style={{
                    height: "0%",
                  }}
                  className="scrolling-bar h-full w-full bg-black"
                ></div>
              </div>
            </div>
            <p className="title-p-text pb-4 text-2xl font-medium">
              {" "}
              Shaping Zentry Collectively
            </p>
            <p className="p-text max-w-[300px] overflow-hidden leading-[18px]">
              articipate in governance, influence key decisions in the
              ever-growing Zentry Universe that is limited only by people's
              imaginations
            </p>
          </div>{" "}
          <div className="relative pl-20 text-black">
            <div className="absolute top-0 left-0 h-full">
              <p className="mt-2 w-4 text-xs font-black">01</p>
              <div className="absolute bottom-0 ml-1 flex h-[60%] w-[2px] bg-black/25">
                <div
                  style={{
                    height: "0%",
                  }}
                  className="scrolling-bar h-full w-full bg-black"
                ></div>
              </div>
            </div>
            <p className="pb-4 text-2xl font-medium">
              {" "}
              Shaping Zentry Collectively
            </p>
            <p className="max-w-[300px] leading-[18px]">
              articipate in governance, influence key decisions in the
              ever-growing Zentry Universe that is limited only by people's
              imaginations
            </p>
          </div>
          <div className="relative pl-20 text-black">
            <div className="absolute top-0 left-0 h-full">
              <p className="mt-2 w-4 text-xs font-black">01</p>
              <div className="absolute bottom-0 ml-1 flex h-[60%] w-[2px] bg-black/25">
                <div
                  style={{
                    height: "0%",
                  }}
                  className="scrolling-bar h-full w-full bg-black"
                ></div>
              </div>
            </div>
            <p className="pb-4 text-2xl font-medium">
              {" "}
              Shaping Zentry Collectively
            </p>
            <p className="max-w-[300px] leading-[18px]">
              articipate in governance, influence key decisions in the
              ever-growing Zentry Universe that is limited only by people's
              imaginations
            </p>
          </div>
        </div>
        <div className="videos right-10 bottom-0 mx-auto flex items-center justify-center lg:absolute lg:bottom-25">
          <div className="video-1 max-h-[200px] max-w-[200px] lg:max-h-[600px] lg:max-w-[600px]">
            <video
              className="universe-video"
              src={src(videoSrc)}
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universe;
