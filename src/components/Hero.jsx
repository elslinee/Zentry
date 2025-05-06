import React, { useCallback, useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect } from "react";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(1);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const upComingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVdClick = useCallback(() => {
    setHasClicked(true);
    setCurrentIndex(upComingVideoIndex);
  }, [upComingVideoIndex]);
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const [vidHover, setVidHover] = useState(false);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => {
            setCurrentVideoSrc(currentIndex);
          },
          // onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    },
  );

  return (
    <section className="hero-section h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="bg-blue-75 relative h-dvh overflow-hidden"
      >
        <div className="mask-clip-path absolute-center absolute z-[50] cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVdClick}
            className={`origin-center transition-all duration-500 ease-in-out ${vidHover ? "c-p-normal" : "c-p-vid"}`}
            onMouseEnter={() => setVidHover(true)}
            onMouseLeave={() => setVidHover(false)}
          >
            <video
              autoPlay
              id={"current-video"}
              className="size-64 origin-center scale-150 object-cover object-center"
              loop
              muted
              src={getVideoSrc(upComingVideoIndex)}
              ref={nextVideoRef}
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        <video
          autoPlay
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <video
          autoPlay
          src={getVideoSrc(currentVideoSrc)}
          loop
          muted
          className="absolute top-0 left-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
      </div>
      <h1 className="special-font text-blue-75 hero-heading absolute right-5 bottom-5 z-40">
        G<b>a</b>ming
      </h1>
      <div className="absolute top-0 left-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font text-blue-75 hero-heading">
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
    </section>
  );
}

export default Hero;
