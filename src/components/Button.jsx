import React, { useRef, useState } from "react";
import { ArrowIcon } from "../icons/icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Button = ({ id, title, leftIcon = false, rightIcon, containerClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef(null);
  const splitAnimation = (y) => {
    gsap.fromTo(
      btnRef.current,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
      },
    );
  };
  const hoverEffect = (state) => {
    splitAnimation(state ? -20 : 20);
    setIsHovered(state);
  };
  return (
    <button
      id={id}
      className={`group btn-clip-hover relative z-10 w-fit rotate-2 cursor-pointer overflow-hidden rounded-[40px] bg-violet-50 px-7 py-3 text-black transition-all duration-200 ease-out hover:rounded-[6px] ${containerClass} ${isHovered ? "btn-clip-hover" : "btn-clip-nonHover"}`}
      onMouseEnter={() => hoverEffect(true)}
      onMouseLeave={() => hoverEffect(false)}
    >
      <div className="relative">
        <div ref={btnRef} className="flex items-center">
          {leftIcon && (
            <span className="mr-3 flex h-full w-[14px] rotate-45">
              {ArrowIcon}
            </span>
          )}
          <span className="font-general relative inline-flex overflow-hidden text-sm font-bold uppercase">
            <div>{title}</div>
          </span>
        </div>
      </div>
      {rightIcon}
    </button>
  );
};

export default Button;
