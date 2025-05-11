import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BentoCard({
  title,
  description,
  videoSrc,
  comingSoon = true,
  launchSite = false,
  className,
  moreComingSoon = false,
  play = false,
}) {
  const itemRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState(``);
  useEffect(() => {
    if (!moreComingSoon) {
      if (isHovered) {
        videoRef.current.play();
      } else {
        if (play) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  }, [isHovered, play, moreComingSoon]);
  const handleMouseMove = (e) => {
    const { left, top, height, width } =
      itemRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (y - 0.5) * 15;
    const tiltY = (x - 0.5) * -15;

    const scale = 0.96;
    const newTransform = `
      perspective(1000px)
      rotateX(${tiltX}deg)
      rotateY(${tiltY}deg)
      scale3d(${scale}, ${scale}, ${scale})
    `;

    setTransform(newTransform);
  };
  const handleMouseLeave = () => {
    setTransform(``);
  };
  useGSAP(() => {
    gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: itemRef.current,
        start: "-200px center",
        end: "+=100%",
        scrub: false,
        toggleActions: "play none none reverse",
      },
      y: 50,

      opacity: 0,
    });
  }, []);
  return (
    <div
      ref={itemRef}
      style={{ transform }}
      className={`bento-card cursor-grabbing transition-all duration-300 ease-out ${className}`}
      onMouseEnter={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        setIsHovered(false);
        handleMouseLeave(e);
      }}
    >
      {!moreComingSoon ? (
        <div className="bento-card-content border-blue-75/15 relative h-full min-h-[250px] overflow-hidden rounded-md border bg-black">
          <div className="bento-text absolute top-0 left-0 flex h-full w-full flex-col justify-between p-6">
            <div>
              <h4
                className="text-blue-75 special-font font-zentry text-4xl font-bold uppercase md:text-7xl"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-blue-75 max-w-[240px] pt-3 text-xs leading-none text-balance opacity-90 md:text-base">
                {description}
              </p>
            </div>

            <div className="bento-btns flex flex-col gap-3 md:flex-row">
              {comingSoon && (
                <Button
                  hoverEff={false}
                  leftIcon
                  title={"Coming Soon"}
                  containerClass={
                    "!bg-black !py-3 !px-6 !text-xs  !text-blue-75/50   pointer-events-none !border-blue-75/50 !border"
                  }
                />
              )}
              {launchSite && (
                <Button
                  hoverEff={false}
                  leftIcon
                  title={"Launch Site"}
                  containerClass={
                    "!bg-black !py-3 !px-6 !text-xs !text-yellow-300 !border-yellow-300 !border"
                  }
                />
              )}
            </div>
          </div>
          {videoSrc && (
            <video
              autoPlay={play}
              ref={videoRef}
              muted
              id="bento-video"
              src={videoSrc}
              className="h-full w-full object-cover"
            ></video>
          )}
        </div>
      ) : (
        <div className="bento-card-content relative h-full min-h-[250px] overflow-hidden rounded-md bg-violet-300 p-6">
          <h4
            className="font-zentry special-font text-4xl font-bold text-black uppercase md:text-7xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <img
            src="/img/zentry-black.png"
            alt=""
            className="absolute right-6 bottom-6 size-15"
          />
        </div>
      )}
    </div>
  );
}

export default BentoCard;
