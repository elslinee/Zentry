import React, { useRef, useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";

function Footer() {
  const itemRef = useRef(null);
  const [transform, setTransform] = useState(``);

  const handleMouseMove = (e) => {
    const { left, top, height, width } =
      itemRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (y - 0.5) * 35;
    const tiltY = (x - 0.5) * -35;

    const scale = 0.98;
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
  return (
    <footer className="relative md:flex hidden  lg:gap-0  gap-24 flex-col justify-between overflow-hidden bg-[#5542ff] lg:min-h-[125vh]">
      <div style={{ transform }} ref={itemRef} className="w-full">
        <h2
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="font-zentry special-font mx-auto flex items-center justify-center text-center text-[36vw] leading-none font-black text-black select-none"
        >
          ZENTR<b>Y</b>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:hidden">
        <img src="/img/zentry-black.png" alt="" className="size-20" />
      </div>
      <div className="flex w-full flex-col items-end justify-between gap-8 lg:px-20 px-10 pb-10 md:flex-row lg:pb-40">
        <div className="flex flex-1 flex-row justify-between lg:gap-8 gap-4">
          <div className="hidden flex-col items-start gap-4 lg:flex">
            <img src="/img/zentry-black.png" alt="" className="size-20" />
          </div>
          <div>
            <div className="mb-4 text-center text-xs uppercase">Explore</div>
            <ul className="space-y-1 text-base lg:text-2xl">
              <li>Home</li>
              <li>Prologue</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-center text-xs uppercase">Products</div>
            <ul className="space-y-1 text-base lg:text-2xl">
              <li className="pointer-events-none opacity-40">Radiant</li>
              <li className="flex items-center gap-1">
                <span className="font-semibold">Nexus</span>{" "}
                <span aria-label="external link" role="img">
                  <CgArrowTopRight />
                </span>
              </li>
              <li className="pointer-events-none opacity-40">Zigma</li>
              <li className="pointer-events-none opacity-40">Azul</li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-center text-xs uppercase">Follow Us</div>
            <ul className="space-y-1 text-base lg:text-2xl">
              <li>Discord</li>
              <li>X</li>
              <li>Youtube</li>
              <li>Medium</li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-center text-xs uppercase">Resources</div>
            <ul className="space-y-1 text-base lg:text-2xl">
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
