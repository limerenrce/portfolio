import { assets } from "@/assets/assets"; 
import Image from "next/image";
import React from "react";

export default function Apriori() {
  return (
    <>
      <section> 

        {/* PAGE TITLE */}
        <div className="pt-8 flex justify-between items-start">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">APRIORI</h3>
            <p className="text-gray-500 mt-4 w-200">
              A data mining project that analyzes retail transactions to uncover frequent itemsets and generate association rules, showing which products are often purchased together.
            </p>
            <p className="text-gray-500 mt-4 w-200">
              I applied the <span className="text-black font-bold">Apriori algorithm</span> to retail datasets, extracting strong product pairings and frequently bought item combinations. These insights supported marketing strategies, promotions, and retail layout optimization.
            </p>
            <div className="flex gap-3 text-white text-sm mt-10">
              <p className="rounded-xl bg-[#404040] px-2">Data Mining</p>
              <p className="rounded-xl bg-[#404040] px-2">Python</p>
              <p className="rounded-xl bg-[#404040] px-2">Apriori Algorithm</p>
              <p className="rounded-xl bg-[#404040] px-2">Association Rules</p>
              <p className="rounded-xl bg-[#404040] px-2">Business Intelligence</p>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-3">
            <Image
            src={assets.pj_mb_1}
            alt="Project Mobile App Sushi Man"
            className="w-full rounded-lg"
            />
          </div>
          <div className="col-span-3">
            <Image
            src={assets.pj_mb_2}
            alt="Project Mobile App Sushi Man"
            className="w-full rounded-lg"
            />
          </div> 
        </div>
      </section>
    </>
  );
}
