import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { ArrowIcon } from "../icons/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../context/AppContext";
gsap.registerPlugin(ScrollTrigger);
function NavBar() {
  const { soundOn, setSoundOn } = useAppContext();
  const [x, setX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const navRef = useRef(null);
  const navLinks = [
    { id: "nexus", title: "NEXUS" },
    { id: "vault", title: "VAULT" },
    { id: "prologue", title: "PROLOGUE" },
    { id: "about", title: "ABOUT" },
    { id: "contact", title: "CONTACT" },
  ];

  const handleHover = (e) => {
    const parentOffset = navRef.current.getBoundingClientRect().left;
    const itemOffset = e.currentTarget.getBoundingClientRect().left;
    setX(itemOffset - parentOffset);
  };
  useEffect(() => {
    const audio = document.getElementById("sound-effect");
    if (soundOn) {
      audio.play();
      audio.volume = 0.5;
    } else {
      audio.volume = 0;
    }
  }, [soundOn]);
  useGSAP(() => {
    gsap.to("nav .nav-div", {
      scrollTrigger: {
        trigger: "nav",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      duration: 1,
      backgroundColor: "black",
    });
  }, []);

  useGSAP(() => {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        gsap.to(navbar, {
          yPercent: -150,
          duration: 1,
        });
      } else {
        gsap.to(navbar, {
          yPercent: 0,
          duration: 1,
        });
      }

      lastScrollTop = scrollTop;
    });
  }, []);
  return (
    <nav className="navbar fixed top-0 left-0 z-[100] mt-2 h-18 w-full px-2 sm:mt-3 sm:px-3">
      <audio loop id="sound-effect" className="hidden" src="/audio/loop.mp3" />
      <div className="nav-div flex h-full items-center rounded-lg bg-transparent px-5 sm:px-7">
        <div className="logo-and-btns flex flex-1 items-center justify-between gap-8 lg:justify-start">
          <div className="logo size-8 sm:size-10">
            <img
              src="/img/zentry-blue-75.png"
              alt="logo"
              className="size-full"
            />
          </div>
          <div className="nav-btns flex items-center gap-3">
            <Button
              id="products"
              title="Products"
              rightIcon
              containerClass="!bg-blue-75 flex-center gap-1 md:text-[11px] text-[9px] !px-5 !py-[10px]"
            />
            <Button
              id="whitepaper"
              title="Whitepaper"
              containerClass="!bg-blue-75 flex-center gap-1 md:text-[11px] text-[9px]  !px-5 !py-[10px]"
            />
            <div className="menu-btn flex w-[32px] cursor-pointer flex-col items-center justify-center gap-1 lg:hidden">
              <span className="menu-line bg-blue-75 h-[2px] w-full"></span>
              <span className="menu-line bg-blue-75 h-[2px] w-full"></span>
            </div>
          </div>
        </div>

        <div className="nav-links hidden lg:flex">
          <ul
            ref={navRef}
            className="relative hidden items-center gap-4 lg:flex"
          >
            <div
              style={{
                transform: `translateX(${x}px)`,
                width: "100px",
              }}
              className={`absolute top-0 left-0 z-[1] h-full rounded-2xl transition-all duration-200 ease-linear ${
                isHovering ? "bg-blue-75" : "bg-transparent"
              }`}
            ></div>

            {navLinks.map((link, index) => {
              const isArrow = index < 2;
              return (
                <li
                  key={link.id}
                  onMouseEnter={(e) => {
                    handleHover(e);
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                  className={`${"text-blue-75 group tr-3 relative z-[2] flex w-[100px] items-center justify-center text-center text-xs font-bold hover:text-black"}`}
                >
                  <a
                    href={`#${link.id}`}
                    className={`relative z-[2] flex px-4 py-2 text-center`}
                  >
                    {link.title}
                    {isArrow && (
                      <span className="ml-1 flex size-[10px] rotate-10">
                        {ArrowIcon}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
            <div
              className={`soundBtn__indicator flex h-[4px] items-center gap-[4px] ${
                soundOn ? "soundOn" : ""
              }`}
              onClick={() => setSoundOn(!soundOn)}
            >
              <div
                className="indicator-line"
                style={{ "--animation-order": 0 }}
              ></div>
              <div
                className="indicator-line"
                style={{ "--animation-order": 1 }}
              ></div>
              <div
                className="indicator-line"
                style={{ "--animation-order": 2 }}
              ></div>
              <div
                className="indicator-line"
                style={{ "--animation-order": 3 }}
              ></div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
