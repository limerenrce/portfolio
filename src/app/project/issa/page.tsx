import { assets } from "@/assets/assets"; 
import Image from "next/image";
import React from "react";

export default function Issa() {
  return (
    <>
      <section> 

        {/* PAGE TITLE */}
        <div className="pt-8 flex justify-between items-start">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">ISSA</h3>
            <p className="text-gray-500 mt-4 w-200">
              A web-based system designed to record and manage student
              achievement data. It helps academic staff input, store, and
              retrieve records efficiently, improving data organization and
              accessibility.
            </p>
            <p className="text-gray-500 mt-4 w-200">
              I developed the full system using{" "}
              <span className="text-black font-bold">HTML</span>,{" "}
              <span className="text-black font-bold">Bootstrap</span>, and{" "}
              <span className="text-black font-bold">native PHP</span>, with an{" "}
              <span className="text-black font-bold">XAMPP-based database</span>{" "}
              for local deployment. I handled both the{" "}
              <span className="text-black font-bold">frontend UI</span> and the{" "}
              <span className="text-black font-bold">backend logic</span>,
              delivering a fully functional achievement tracking system hosted
              on localhost.
            </p>
            <div className="flex gap-3 text-white text-sm mt-10">
              <p className="rounded-xl bg-[#404040] px-2">
                Full Stack Development
              </p>
              <p className="rounded-xl bg-[#404040] px-2">PHP</p>
              <p className="rounded-xl bg-[#404040] px-2">HTML</p>
              <p className="rounded-xl bg-[#404040] px-2">Bootstrap</p>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-6">
            <Image
              src={assets.pj_is_1}
              alt="login page project ISSA"
              className="border-50 border-yellow-400 w-full rounded-lg"
            />
          </div>
          <div className="col-span-6"> 
            <Image
            src={assets.pj_is_2}
            alt="formulir student achievement Project ISSA"
            className="border-50 border-yellow-400 w-full rounded-lg"
            /> 
          </div>  
        </div>
      </section>
    </>
  );
}
