// import { assets } from "@/assets/assets";
// import Image from "next/image";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
              className="lg:flex items-center gap-3 py-2 px-2 w-30 mt-10 ml-43 text-blue-500"
              href="/contact"
            >
              Contact{" "}
              <Image
                src={assets.right_arrow_bold}
                alt="contact"
                className="w-3"
              />
            </Link>
          </div>
        </div>

        {/* BENTO BOX MENU */}
        <div className="mt-10 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="row-span-3 col-span-3 grid grid-cols-2 gap-6">
            <div className="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
              <p className="text-7xl text-center capitalize font-normal">
                100
              </p>
            </div>
            <div className="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
              <p className="text-2xl text-center capitalize font-bold mb-4">
                100
              </p>
            </div>
            <div className="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
              <p className="text-2xl text-center capitalize font-bold mb-4">
                100
              </p>
            </div>
            <div className="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
              <p className="text-2xl text-center capitalize font-bold mb-4">
                100
              </p>
            </div>
          </div>

          
          <div className="row-span-3 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
            <Link href="/about">
            <p className="text-2xl text-left capitalize font-normal mb-4">
              Your ultimate website developer.
            </p>
            <p>
              Hi, I’m Satya Uttami 👋 A passionate Information Systems student (GPA 3.93) who builds production-ready web & mobile apps with React, Flutter, and Flask. I thrive at the intersection of design and development, turning ideas into scalable solutions. My goal? To bring impact through clean code, intuitive design, and strong teamwork.
            </p>
          </Link>
          </div>

          <div className="row-span-5 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
          <Link href="/project"><p>projects</p></Link></div>
          <div className="row-span-5 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4"><Link href="/experience"><p>Experience</p></Link></div>
        </div>

        

        {/* <div className="grid auto-rows-[150px] grid-cols-4 gap-6">
          <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">A</div>
          <div className="row-span-3 col-span-2 grid grid-cols-2 gap-6">
            <div className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">B</div>
            <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">C</div>
            <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">D</div>
          </div>
          <div className="row-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">E</div>
          <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">F</div>
          <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">G</div>
          <div className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">H</div>
        </div> */}
      </section>
      {/* <section className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl shadow-zinc-600/40 rounded-2xl overflow-hidden shrink-0">
          <Image
            className="max-w-md w-full object-cover rounded-2xl"
            src={assets.user_image}
            alt=""
            width={200}
          />
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            Welcome To My Portfolio!
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-zinc-400 to-[#DDD9FF]"></div>
          <p className="mt-8">
            Ni Wayan Putri Satya Uttami.{" "}
          </p>
          <p className="mt-4">
            Software Developer.
          </p>
          <p className="mt-4">
            From UI design systems to automation-ready layouts, PrebuiltUI
            empowers you to build beautifully and scale effortlessly.
          </p>
          <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-zinc-600 to-[#FFFFFF] py-3 px-8 rounded-full text-white">
            <span>Read more</span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </section> */}
    </>
  );
}
