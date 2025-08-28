import { assets } from "@/assets/assets";
import Breadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Work() {
  return (
    <>
      <section>
        {/* Breadcrumbs */}
        <Breadcrumb />

        {/* PAGE TITLE */}
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">
              My Works
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

        {/* PAGE CONTENT */}

        <div className="mt-10 grid auto-rows-[90px] grid-cols-5 gap-6">
          {/* SELINGAN */}

          <div className="relative overflow-hidden row-span-5 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]">
            <Link
              href="/project/selingan"
              className="overflow-hidden transition group"
            >
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SELINGAN</h3>
                  <p className="text-gray-500">
                    Brand & product refresh, Web design
                  </p>
                </div>
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
              </div>
              <Image
                src={assets.selingan_tb}
                alt="Selingan Preview"
                width={660}
                className="shadow-lg shadow-gray-500 group-hover:shadow-sm border-7 border-white rounded-xl rotate-1 ml-5 mt-6 transform transition duration-300 group-hover:rotate-2 group-hover:-translate-y-8"
              />
            </Link>
          </div>

          {/* SUHSI MAN */}

          <div className="relative overflow-hidden row-span-5 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]">
            <Link
              href="/project/sushiman"
              className="overflow-hidden transition group"
            >
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    SUSHI MAN
                  </h3>
                  <p className="text-gray-500">Branding, Illustrations</p>
                </div>
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
              </div>
              <Image
                src={assets.sushiman_tb}
                alt="Sushiman Preview"
                width={420}
                height={420}
                className="shadow-lg shadow-gray-500 group-hover:shadow-sm border-7 border-white rounded-xl -rotate-1 ml-5 mt-10 transform transition duration-300 group-hover:-rotate-2 group-hover:-translate-y-8"
              />
            </Link>
          </div>

          {/* APRIORI */}

          <div className="relative overflow-hidden row-span-5 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]">
            <Link
              href="/project/apriori"
              className="overflow-hidden transition group"
            >
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    APRIORI
                  </h3>
                  <p className="text-gray-500">Market basket analysis</p>
                </div>
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
              </div>
              <Image
                src={assets.marketbasket_tb}
                alt="Sushiman Preview"
                width={420}
                height={420}
                className="shadow-lg shadow-gray-500 group-hover:shadow-sm border-7 border-white rounded-xl rotate-1 ml-5 mt-10 transform transition duration-300 group-hover:rotate-2 group-hover:-translate-y-8"
              />
            </Link>
          </div>

          {/* HOKKY */}

          <div className="relative overflow-hidden row-span-5 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]">
            <Link
              href="/project/hokky"
              className="overflow-hidden transition group"
            >
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">HOKKY</h3>
                  <p className="text-gray-500">
                    Bookeeping System, Interface Design
                  </p>
                </div>
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
              </div>
              <Image
                src={assets.pj_wh_3}
                alt="ALBERT Preview"
                width={660}
                className="shadow-lg shadow-gray-500 group-hover:shadow-sm border-7 border-white rounded-xl -rotate-1 ml-5 mt-6 transform transition duration-300 group-hover:-rotate-2 group-hover:-translate-y-8"
              />
            </Link>
          </div>

          {/* ISSA */}

          <div className="relative overflow-hidden row-span-5 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]">
            <Link
              href="/project/issa"
              className="overflow-hidden transition group"
            >
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ISSA</h3>
                  <p className="text-gray-500">
                    Student Achievement Web
                  </p>
                </div>
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
              </div>
              <Image
                src={assets.pj_is_1}
                alt="ISSA Preview"
                width={660}
                className="shadow-lg shadow-gray-500 group-hover:shadow-sm border-7 border-white rounded-xl rotate-1 ml-5 mt-6 transform transition duration-300 group-hover:rotate-2 group-hover:-translate-y-8"
              />
            </Link>
          </div>

          <div className="relative overflow-hidden row-span-5 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]">
            <Link
              href="/project/albert"
              className="overflow-hidden transition group"
            >
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    ALBERT
                  </h3>
                  <p className="text-gray-500">Hospital Review, Sentiment Analysis</p>
                </div>
                <p className="text-gray-800 hover:text-black text-4xl duration-500 mr-6 group-hover:translate-x-5">
                  →
                </p>
              </div>
              <Image
                src={assets.albert_tb}
                alt="Albert Preview"
                width={420}
                height={420}
                className="shadow-lg shadow-gray-500 group-hover:shadow-sm border-7 border-white rounded-xl -rotate-1 ml-5 mt-10 transform transition duration-300 group-hover:-rotate-2 group-hover:-translate-y-8"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
