import { assets } from "@/assets/assets";
import Breadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import React from "react";

export default function Hokky() {
  return (
    <>
      <section>
        {/* Breadcrumbs */}
        <Breadcrumb />

        {/* PAGE TITLE */}
        <div className="pt-8 flex justify-between items-start">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">HOKKY</h3>
            <p className="text-gray-500 mt-4 w-200">
              A bookkeeping system concept created to address common problems faced by SMEs, such as managing orders, expenses, income, employees, and budget planning. The goal was to provide a simple and efficient digital solution for small businesses to track and organize their finances.
            </p>
            <p className="text-gray-500 mt-4 w-200">
              I conducted <span className="text-black font-bold">problem identification </span>for SMEs and designed a <span className="text-black font-bold">high-fidelity prototype in Figma</span>. The system focused on usability and clear workflows, ensuring that financial management features were intuitive for small business owners.
            </p>
            <div className="flex gap-3 text-white text-sm mt-10">
              <p className="rounded-xl bg-[#404040] px-2">Bookkeeping System</p>
              <p className="rounded-xl bg-[#404040] px-2">UI/UX Design</p>
              <p className="rounded-xl bg-[#404040] px-2">Figma</p>
              <p className="rounded-xl bg-[#404040] px-2">SMEs Solutions</p> 
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-6">
            <Image
            src={assets.pj_wh_2}
            alt="Project Mobile App Sushi Man"
            className="border-100 border-black w-full rounded-lg"
            />
          </div>
          <div className="col-span-3">
            <Image
            src={assets.pj_wh_1}
            alt="Project Mobile App Sushi Man"
            className="w-full rounded-lg"
            />
          </div>
          <div className="col-span-3">
            <Image
            src={assets.pj_wh_4}
            alt="Project Mobile App Sushi Man"
            className=" w-[570] rounded-lg"
            />
          </div>
          <div className="col-span-6">
            <Image
            src={assets.pj_wh_3}
            alt="Project Mobile App Sushi Man"
            className="border-50 border-black w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
