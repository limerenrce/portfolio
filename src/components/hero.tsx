import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BentoGrid from "./bentogrid";

export default function Hero() {
  return (
    <>
      <section>
        {/* PAGE TITLE */}
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-12">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">
              Junior Website Developer
            </h1>
          </div>
          <div className="col-span-1>">
            <Link
              className="lg:flex items-center gap-3  w-50 ml-25 text-blue-500 transition group"
              href="/resume.pdf"
              download="resume"
              target="_blank"
            >
              Download CV{" "}
              <p className="text-gray-800 hover:text-black text-2xl duration-500 mr-6 group-hover:translate-x-5">
                →
              </p>
            </Link>
            <Link
              className="lg:flex items-center gap-3 py-2 px-2 w-50 ml-33 text-blue-500 transition group"
              href="/about#contact"
            >
              Contact{" "}
              <p className="text-gray-800 hover:text-black text-2xl duration-500 mr-6 group-hover:translate-x-5">
                →
              </p>
            </Link>
          </div>
        </div>

        {/* BENTO BOX MENU */}
        <div className="mt-10 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="row-span-3 col-span-3 grid grid-cols-2 gap-6 ">
            <div className="row-span-1 col-span-1 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow p-4 flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl font-bold">100+</h2>
              <p className="text-sm mt-2">Completed Projects</p>
            </div>
            <div className="row-span-1 col-span-1 rounded-xl bg-gradient-to-bl from-[#F5F5F5] to-white p-4 flex flex-col items-center justify-center text-center">
              {" "}
              <h2 className="text-2xl font-semibold">Webflow Expert</h2>
            </div>
            <div className="row-span-1 col-span-1 rounded-xl bg-gradient-to-tr from-[#F5F5F5] to-yellow p-4 flex flex-col items-center justify-center text-center">
              {" "}
              <h2 className="text-5xl font-bold">6</h2>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div className="row-span-1 col-span-1 rounded-xl bg-gradient-to-tl from-yellow-100 to-yellow p-4 flex flex-col items-center justify-center text-center">
              {" "}
              <h2 className="text-5xl font-bold">50+</h2>
              <p className="text-sm mt-2">Satisfied Clients</p>
            </div>
          </div>

          <div className="relative overflow-hidden row-span-5 col-span-3 rounded-xl bg-base-grey bg-[#F5F5F5] p-4">
            <Link href="/project" className="transition group">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    RECENT PROJECT
                  </h3>
                  <p className="text-gray-500">See all</p>
                </div>
                <p className="text-gray-800 hover:text-black text-5xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
              </div>
              <Image
                src={assets.sushiman_tb}
                alt="Sushiman Preview"
                width={520}
                height={520}
                className="shadow-lg shadow-gray-500 group-hover:shadow-sm border-7 border-white rounded-xl rotate-1 ml-3 mt-13 transform transition duration-300 group-hover:rotate-2 group-hover:-translate-y-15"
              />
            </Link>
          </div>

          <div className="row-span-2 col-span-3 rounded-xl bg-base-grey bg-[#F5F5F5]">
            <Link href="/about" className="transition group">
              <div className="px-10 mt-10 w-120 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {" "}
                    Your ultimate website developer.
                  </h3>
                  <p className="text-gray-500">
                    Eliminate the hassle of working with developers lacking
                    design sense. I combine expertise, passion, and vision to
                    make your ideas real.
                  </p>
                </div>
              </div>
              <div className="px-10 mt-3 flex gap-4 items-center">
              <p className="text-gray-500 hover:text-grey-800">Get to know more</p>
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
                </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
