import { assets } from "@/assets/assets";
import Breadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import React from "react";

export default function Selingan() {
  return (
    <>
          <section>
            {/* Breadcrumbs */}
            <Breadcrumb />
    
            {/* PAGE TITLE */}
            <div className="pt-8 flex justify-between items-start">
              <div>
                <h3 className="text-4xl font-bold text-gray-900">SELINGAN</h3>
                <p className="text-gray-500 mt-4 w-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  semper lectus vitae augue suscipit elementum. Vivamus non purus id
                  erat pulvinar vestibulum nec in arcu. Mauris ac egestas elit. Cras
                  nec cursus arcu. Praesent egestas risus nulla, vitae egestas ipsum
                  suscipit sagittis. Ut a tellus tristique, euismod justo in,
                  euismod quam. Sed pellentesque dignissim lacus a viverra. Mauris
                  tristique cursus urna, at commodo purus auctor eu. Ut vestibulum
                  efficitur finibus. Cras ornare lorem ut eleifend consequat.
                  Quisque eros nunc, laoreet at sapien vitae, interdum euismod
                  sapien.
                </p>
                <div className="flex gap-3 text-gray-500 mt-3 h-[100px]">
                  <p>Web Design</p>
                  <p>Brand & Product Refresh</p>
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
