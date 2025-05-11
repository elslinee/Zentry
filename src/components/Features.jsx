import React from "react";
import BentoCard from "./BentoCard";

function Features() {
  return (
    <section id="features" className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <h3 className="text-blue-75 text-base md:text-2xl">
            Explore the Zentry Universe
          </h3>
          <p className="text-blue-75 max-w-[500px] pt-1 text-sm text-pretty opacity-50 md:text-xl">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
          <BentoCard
            className="col-span-2 pt-32 pb-[2rem] md:pt-56 lg:h-[900px]"
            title="Radia<b>n</b>t"
            description="The game of games app transforming moments across Web2 & Web3"
            videoSrc="/videos/feature-1.mp4"
          />
          <div className="grid gap-[2rem] lg:h-[135vh] lg:grid-cols-2 lg:grid-rows-3">
            <BentoCard
              className="row-span-2"
              title="Zig<b>m</b>a"
              description="The NFT collection merging Zentry's IP, Al, and gaming-pushing the boundaries of NFT innovation."
              videoSrc="/videos/feature-2.mp4"
            />
            <BentoCard
              className="row-span-1"
              title="N<b>e</b>xus"
              launchSite
              description="The metagame portal uniting humans & AI to play, compete and earn"
              videoSrc="/videos/feature-3.mp4"
            />
            <BentoCard
              className="row-span-1"
              title="Az<b>u<b/>l"
              description="The agent of agents elevating agentic Al experience to be more fun and productive."
              videoSrc="/videos/feature-4.mp4"
            />

            <BentoCard
              className=""
              title="M<b>o</b>re co<b>m</b>ing S<b>o</b>on."
              description="The game of games app transforming moments across Web2 & Web3"
              videoSrc="/videos/feature-5.mp4"
              moreComingSoon
            />
            <BentoCard
              play
              comingSoon={false}
              className=""
              videoSrc="/videos/feature-5.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
