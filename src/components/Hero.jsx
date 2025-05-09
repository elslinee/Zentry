import React, { useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import { useEffect } from "react";
import { Grid } from "ldrs/react";
import "ldrs/react/Grid.css";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const totalVideos = 4;
  const nextVdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [nextVideoSrc, setNextVideoSrc] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentVideoRef = useRef(null);
  const upComingVideoIndex = (currentIndex % totalVideos) + 1;
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const [vidHover, setVidHover] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [allowClick, setAllowClick] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);
  
  const handleMiniVdClick = () => {
    setAllowClick(false);
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    const tl = gsap.timeline({});
    tl.fromTo(
      ".title-gsap",
      {
        y: 0,
      },
      {
        duration: 0.5,
        y: 300,

        onComplete: () => {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        },
      },
    ).fromTo(
      ".title-gsap",
      {
        duration: 0.5,
        y: 300,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
    );
    setTimeout(() => {
      setAllowClick(true);
    }, 1500);
  };
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          width: "100%",
          height: "100%",
          duration: 1.5,
          ease: "expo.out",
          onStart: () => {
            nextVdRef.current.play();
          },
          onComplete: () => {
            setNextVideoSrc(currentIndex);
          },
        });
        gsap.fromTo(
          ".vid-div",
          {
            transformOrigin: "center center",
            clipPath: "inset(50% 50% 50% 50%)",
            duration: 2,
            ease: "expo.out",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
        );
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    },
  );
  useEffect(() => {
    if (currentVideoRef.current) {
      currentVideoRef.current.currentTime = 1.5;
    }
  }, [nextVideoSrc]);
  useGSAP(() => {
    if (vidHover) {
      gsap.fromTo(
        ".vid-div",
        {
          transformOrigin: "center center",
          clipPath: "inset(50% 50% 50% 50%)",
          duration: 2,
          ease: "expo.out",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
      );
    } else {
      gsap.fromTo(
        ".vid-div",
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        { clipPath: "inset(50% 50% 50% 50%)" },
      );
    }
  }, [vidHover]);

  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    {
      text: "G<b>a</b>ming",
    },
    {
      text: "Ide<b>n</b>tity",
    },
    {
      text: "Re<b>a</b>lity",
    },
    {
      text: "Ag<b>e</b>ntic Ai",
    },
  ];
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 65% 0%, 85% 83%, 0% 90%)",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1. inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "1200px center",
        scrub: true,
      },
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({});
    if (!isLoading) {
      tl.to(".site-loader", {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(".site-loader", {
            display: "none",
          });
        },
      });
    }
  }, [isLoading]);
  return (
    <section className="hero-section w-x-hidden relative h-dvh w-screen overflow-hidden">
      <div className="site-loader flex-center fixed z-[1000] h-dvh w-screen overflow-hidden bg-[#5724ff]">
        <div className="loader">
          <Grid size="150" speed="1.5" color="black" />
        </div>
      </div>

      <div
        id="video-frame"
        className="bg-blue-75 relative z-[2] h-dvh overflow-hidden"
      >
        <div
          onMouseEnter={() => setVidHover(true)}
          onMouseLeave={() => setVidHover(false)}
          className="mask-clip-path absolute-center absolute z-[10] cursor-pointer overflow-hidden rounded-lg"
        >
          <div
            className={`vid-div origin-center [clip-path:inset(50%_50%_50%_50%)]`}
          >
            <video
              onClick={handleMiniVdClick}
              id={"current-video"}
              className={`size-56 origin-center scale-300 object-cover object-center ${
                !allowClick ? "pointer-events-none" : ""
              }`}
              loop
              muted
              src={getVideoSrc(upComingVideoIndex)}
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
        <video
          ref={nextVdRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-[2] size-56 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <video
          ref={currentVideoRef}
          src={getVideoSrc(nextVideoSrc)}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <h1
          className="special-font title-gsap text-blue-75 hero-heading absolute right-5 bottom-5 z-[3] overflow-hidden"
          dangerouslySetInnerHTML={{ __html: titles[titleIndex]?.text }}
        />

        <div className="absolute top-0 left-0 z-[2] size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font text-blue-75 hero-heading z-[10]">
              Redefi<b>n</b>e
            </h1>

            <p className="font-robert-regular mb-5 max-w-64 text-xl text-blue-100">
              Enter the Metgame Layer
              <br />
              Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={true}
              containerClass={"bg-yellow-300 flex-center gap-1"}
            />
          </div>
        </div>
      </div>
      <h1
        className="special-font title-gsap hero-heading absolute right-5 bottom-5 z-[-1] overflow-hidden text-black"
        dangerouslySetInnerHTML={{ __html: titles[titleIndex]?.text }}
      />
    </section>
  );
}

export default Hero;
