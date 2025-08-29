import { assets } from "@/assets/assets"; 
import Image from "next/image";
import React from "react";

export default function Sushiman() {
  return (
    <>
      <section> 

        {/* PAGE TITLE */}
        <div className="pt-8 flex justify-between items-start">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">SUSHI MAN</h3>
            <p className="text-gray-500 mt-4 w-200">
              A mobile-based system designed to streamline orders and
              transactions for restaurants. It helps staff process orders
              faster, reduce errors, and improve the overall dining experience.
            </p>
            <p className="text-gray-500 mt-4 w-200">
              I designed the{" "}
              <span className="text-black font-bold">
                UI prototypes in Figma
              </span>{" "}
              , developed the{" "}
              <span className="text-black font-bold">
                cross-platform mobile app with Flutter
              </span>
              , and built the{" "}
              <span className="text-black font-bold">backend with Flask</span>{" "}
              to manage real-time orders and transactions. The result was a
              fully functional POS system that improved efficiency and order
              accuracy.
            </p>
            <div className="flex gap-3 text-white text-sm mt-10">
              <p className="rounded-xl bg-[#404040] px-2">Mobile Development</p>
              <p className="rounded-xl bg-[#404040] px-2">Flutter</p>
              <p className="rounded-xl bg-[#404040] px-2">Flask</p>
              <p className="rounded-xl bg-[#404040] px-2">POS System</p>
              <p className="rounded-xl bg-[#404040] px-2">RESTFull API</p>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-6">
            <Image
              src={assets.pj_sm_4}
              alt="Project Mobile App Sushi Man"
              className="w-full rounded-lg"
            />
          </div>
          <div className="col-span-6">
            <Image
              src={assets.pj_sm_5}
              alt="Project Mobile App Sushi Man"
              className="w-full rounded-lg"
            />
          </div>
          <div className="col-span-3">
            <Image
              src={assets.pj_sm_3}
              alt="Project Mobile App Sushi Man"
              className="w-full rounded-lg"
            />
          </div>
          <div className="col-span-3">
            <Image
              src={assets.pj_sm_1}
              alt="Project Mobile App Sushi Man"
              className="w-full rounded-lg"
            />
          </div>
          <div className="col-span-6">
            <Image
              src={assets.pj_sm_2}
              alt="Project Mobile App Sushi Man"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
