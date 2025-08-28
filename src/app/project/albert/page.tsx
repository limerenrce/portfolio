import { assets } from "@/assets/assets";
import Breadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import React from "react";

export default function Albert() {
  return (
    <>
      <section>
        {/* Breadcrumbs */}
        <Breadcrumb />

        {/* PAGE TITLE */}
        <div className="pt-8 flex justify-between items-start">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">ALBERT</h3>
            <p className="text-gray-500 mt-4 w-200">
              A machine learning system that classifies hospital reviews into positive, neutral, or negative categories to help healthcare providers understand patient experiences.
            </p>
            <p className="text-gray-500 mt-4 w-200">
              I trained and optimized a <span className="text-black font-bold">sentiment classification model using ALBERT</span>, improving performance over baseline models. The system was capable of accurately predicting sentiment on unseen hospital reviews and enabled scalable feedback analysis.
            </p>
            <div className="flex gap-3 text-white text-sm mt-10">
              <p className="rounded-xl bg-[#404040] px-2">Sentiment Analysis</p>
              <p className="rounded-xl bg-[#404040] px-2">Python</p>
              <p className="rounded-xl bg-[#404040] px-2">ALBERT</p>
              <p className="rounded-xl bg-[#404040] px-2">Healthcare Data</p> 
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-6">
            <Image
            src={assets.pj_ab_1}
            alt="Project Mobile App Sushi Man"
            className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
