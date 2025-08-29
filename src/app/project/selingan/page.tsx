import { assets } from "@/assets/assets"; 
import Image from "next/image";
import React from "react";

export default function Selingan() {
  return (
    <>
          <section> 
    
            {/* PAGE TITLE */}
            <div className="pt-8 flex justify-between items-start">
              <div>
                <h3 className="text-4xl font-bold text-gray-900">SELINGAN</h3>
                <p className="text-gray-500 mt-4 w-200">
                  A digital platform designed to make your free time more meaningful. Whether you’re looking for fun and exciting activities to join or want to host your own events, SELINGAN makes it simple. It connects people with new experiences from casual meetups and workshops to outdoor adventures all in one easy-to-use website.
                </p>
                <p className="text-gray-500 mt-4 w-200">
                 I developed the <span className="text-black font-bold">Flask API</span>  and connected it with the <span className="text-black font-bold">ReactJS interface</span> . I also built the <span className="text-black font-bold">geolocation</span> feature using <span className="text-black font-bold">Leaflet</span>  to display activity locations on an interactive map. On the frontend, I used <span className="text-black font-bold">Ant Design</span> and <span className="text-black font-bold">TailwindCSS</span> to create a clean and responsive user experience.
                </p>
                <div className="flex gap-3 text-white text-sm mt-10">
                  <p className="rounded-xl bg-[#404040] px-2">Full Stack Development</p>
                  <p className="rounded-xl bg-[#404040] px-2">ReactJS</p>
                  <p className="rounded-xl bg-[#404040] px-2">Flask</p>
                  <p className="rounded-xl bg-[#404040] px-2">Geolocation</p>
                  <p className="rounded-xl bg-[#404040] px-2">RESTFull API</p>
                </div>
              </div>
            </div>
    
            {/* PAGE CONTENT */}
            <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
              <div className="col-span-6">
                <Image
                src={assets.pj_sl_1}
                alt="Project Mobile App Sushi Man"
                className="w-full rounded-lg"
                />
              </div>
              <div className="col-span-3">
                <Image
                src={assets.pj_sl_2}
                alt="Project Mobile App Sushi Man"
                className="w-full rounded-lg"
                />
              </div> 
              <div className="col-span-3">
                <Image
                src={assets.pj_sl_3}
                alt="Project Mobile App Sushi Man"
                className="w-full rounded-lg"
                />
              </div> 
            </div>
          </section>
        </>
  );
}
