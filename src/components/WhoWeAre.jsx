import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="bg-inherit relative min-h-screen w-full pt-16 pb-16 lg:pt-40 lg:pb-32"
    >
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5">
          <div className="flex flex-col items-center justify-center">
            <span className="about-welcome font-general flex w-full items-center justify-center pb-10 text-center text-xs font-medium text-black uppercase">
              who we are
            </span>
            <AnimatedTitle reverse={true} className={""}>
              <div className="relative">
                <h2 className="font-zentry about-title special-font m-0 mx-auto p-0 !pb-[100px] text-center text-[clamp(60px,8vw,150px)] leading-[clamp(60px,8vw,120px)] font-black text-black">
                  We're building <br />a{" "}
                  <span className="inline-block">new</span>
                  <span className="box-1 group relative mx-6 mb-3 inline-flex size-[30px] cursor-pointer items-center justify-center rounded-md bg-black align-middle md:mx-12 md:mb-6 md:size-[50px]">
                    <div className="tr-5 absolute top-0 left-0 size-full rounded-md bg-black group-hover:scale-[300%] group-hover:opacity-100 md:group-hover:scale-[600%]">
                      <img
                        src="/img/gallery-5.webp"
                        className="tr-5 size-full object-cover opacity-0 group-hover:opacity-100"
                        alt=""
                      />
                    </div>
                  </span>
                  <span className="inline-block">reality</span> <br />
                  that rewards <br />
                  players
                  <span className="box-2 group relative mx-6 mb-3 inline-flex size-[30px] cursor-pointer items-center justify-center rounded-md bg-black align-middle md:mx-12 md:mb-6 md:size-[50px]">
                    <div className="tr-5 absolute top-0 left-0 size-full rounded-md bg-black group-hover:scale-[200%] group-hover:opacity-100 md:group-hover:scale-[600%]">
                      <img
                        src="/img/gallery-5.webp"
                        className="tr-5 size-full object-cover opacity-0 group-hover:opacity-100"
                        alt=""
                      />
                    </div>
                  </span>
                  and <br />
                  empowers <br />
                  humans & AI <br />
                  to
                  <span className="box-3 group relative mx-6 mb-3 inline-flex size-[30px] cursor-pointer items-center justify-center rounded-md bg-black align-middle md:mx-12 md:mb-6 md:size-[50px]">
                    <div className="tr-5 absolute top-0 left-0 size-full rounded-md bg-black group-hover:scale-[200%] group-hover:opacity-100 md:group-hover:scale-[600%]">
                      <img
                        src="/img/gallery-5.webp"
                        className="tr-5 size-full object-cover opacity-0 group-hover:opacity-100"
                        alt=""
                      />
                    </div>
                  </span>
                  thrive
                </h2>
              </div>
            </AnimatedTitle>
          </div>
          <p className="text-center text-xl font-medium text-black">
            Zentry envisions a future where players, emerging tech, and <br /> a
            new economy unite at the convergence of gaming and AI.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              title={"Discover Who We Are"}
              containerClass={"!bg-black !text-blue-75 !mx-auto"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
