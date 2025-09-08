import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Contact from "../contact/page";
import Marquee from "@/components/marquee";

export default function About() {
  return (
    <>
      <section>
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[460]">
              Your ultimate website developer
            </h1>
          </div>
          <div className="col-span-1>">
            {/* <Link
              className="lg:flex items-center gap-3 py-2 px-2 w-30 mt-10 ml-43 rounded-full border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]"
              href="#contact"
            >
              Contact{" "}
              <Image src={assets.arrow_icon} alt="contact" className="w-3" />
            </Link> */}
          </div>
        </div>

        <div className="mt-6 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="row-span-4 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  👋 About Me
                </h3>
                <p className="text-gray-500">
                  I’m a Full Stack Developer with a strong foundation in
                  frontend, backend, and UI/UX design. I enjoy building digital
                  products that are not only functional but also intuitive and
                  visually engaging. My goal? To bring impact through clean
                  code, intuitive design, and strong teamwork.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden row-span-4 col-span-4 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <Image
              src={assets.about_gif}
              alt="GIF Profile. I am Utta, I play instrument, and I like to travel"
              className="w-full bg-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-25">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[460]">
              Here are the list what I am capable of.
            </h1>
          </div>
          <div className="col-span-1>">
            {/* <Link
              className="lg:flex items-center gap-3 py-2 px-2 w-30 mt-10 ml-43 rounded-full border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]"
              href="#contact"
            >
              Contact{" "}
              <Image src={assets.arrow_icon} alt="contact" className="w-3" />
            </Link> */}
          </div>
        </div>
        <div className="mt-10 overflow-hidden p-4">
          <Marquee />
        </div>

        <div className="mt-20 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="relative overflow-x-hidden row-span-4 col-span-4 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <Image
              src={assets.skill_gif}
              alt="GIF Profile. I am Utta, I play instrument, and I like to travel"
              className="w-full bg-cover"
            />
          </div>

          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  🎨 Frontend
                </h3>
                <p className="text-gray-500">
                  Skilled in ReactJS, TailwindCSS, Ant Design, Flutter, and
                  creating user-friendly interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">⚙️ Backend</h3>
                <p className="text-gray-500">
                  Experienced with Flask, PHP, REST APIs, MySQL/XAMPP, and
                  integrating scalable services.
                </p>
              </div>
            </div>
          </div>

          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">🖌️ Design</h3>
                <p className="text-gray-500">
                  Proficient in Figma for designing high-fidelity prototypes and
                  translating business needs into clear, user-centered designs.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  🎯 Goal-Oriented
                </h3>
                <p className="text-gray-500">
                  I focus on building solutions that solve real problems, from
                  streamlining POS transactions, enhancing academic record
                  systems, to creating platforms that connect communities.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">🤔 More..</h3>
                <p className="text-gray-500">
                  I aim to grow as a developer who bridges technology, design,
                  and problem-solving, delivering impactful solutions that
                  improve everyday experiences.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-25" id="contact">
          <Contact />
        </div>
      </section>
    </>
  );
}
