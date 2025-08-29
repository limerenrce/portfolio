import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Marquee() {
  // strictly type the logos so it matches keys in assets
  const companyLogos: (keyof typeof assets)[] = [
    "figma",
    "git",
    "firebase",
    "mongodb",
    "canva",
    "docker", 
    "flutter",
    "react_js",
    "python",
    "wordpress",
    "tailwind",
    "next_js",
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        {/* Marquee content */}
        <div
          className="marquee-inner flex will-change-transform min-w-[200%]"
          style={{ animationDuration: "15s" }}
        >
          <div className="flex">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <Image
                key={index}
                src={assets[company]} // ✅ bracket notation for TypeScript
                alt={company}
                className="w-16 h-16 object-contain mx-6"
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* Right gradient */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
}
