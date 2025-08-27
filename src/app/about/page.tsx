import { assets } from "@/assets/assets";
import Breadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <section>
        <Breadcrumb />

        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">
              About Me
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

        <div className="mt-10 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="row-span-4 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Active-Passive
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vel fringilla velit. Cras ut arcu ut dui scelerisque
                  scelerisque. Integer non lectus viverra, vehicula metus vel,
                  condimentum nunc. Suspendisse imperdiet, leo et facilisis
                  euismod, eros risus placerat sapien, eu bibendum lorem nisl et
                  ligula. Mauris sit amet laoreet mi. Pellentesque justo sem,
                  vestibulum efficitur elementum dignissim, blandit et justo. Ut
                  ut lacus pulvinar sem semper finibus at sagittis massa.{" "}
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

        <div className="mt-8 overflow-hidden p-4">
          <div className="marquee-content flex gap-4 items-center animate-marquee">
            <div className="px-4 py-2 w-full">
              <Image
              src={assets.firebase}
              alt="firebase"/>
            </div>
            <div className="px-4 py-2 w-full">
              <Image
              src={assets.figma}
              alt="firebase"/>
            </div>
            <div className="px-4 py-2 w-full">
              <Image
              src={assets.git}
              alt="firebase"/>
            </div>
            <div className="px-4 py-2 w-full">
              <Image
              src={assets.mongodb}
              alt="firebase"/>
            </div>
            <div className="px-4 py-2 w-full">
              <Image
              src={assets.vscode}
              alt="firebase"/>
            </div> 
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="relative overflow-x-hidden row-span-4 col-span-4 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <Image
              src={assets.skill_gif}
              alt="GIF Profile. I am Utta, I play instrument, and I like to travel"
              className="w-full bg-cover"
            />
          </div>

          <div className="row-span-4 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Active-Passive
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vel fringilla velit. Cras ut arcu ut dui scelerisque
                  scelerisque. Integer non lectus viverra, vehicula metus vel,
                  condimentum nunc. {" "}
                </p>
              </div>
            </div>
          </div>


          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                 Velma
                </h3>
                <p className="text-gray-500">
                 As a Learning Developer Lead, I designed programs with 90%+ satisfaction. {" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Sakapuan
                </h3>
                <p className="text-gray-500">
                  As a R&D Manager, I led data strategies for content engagement. {" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Achievements & Publications
                </h3>
                <p className="text-gray-500">
                  (mini section at bottom) → medals, competition results, copyrighted works.{" "}
                </p>
              </div> 
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
