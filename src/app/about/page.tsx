import Breadcrumb from "@/components/breadcrumb";
import React from "react";

export default function About() {
  return (
    <>
      <section>
        <Breadcrumb/>

        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">
              About Me
            </h1>
          </div>
          <div className="col-span-1>">
            {/* <Link
              className="lg:flex items-center gap-3 py-2 px-2 w-30 mt-10 ml-43 rounded-full border-2 border-slate-400/10 bg-base-grey bg-white"
              href="#contact"
            >
              Contact{" "}
              <Image src={assets.arrow_icon} alt="contact" className="w-3" />
            </Link> */}
          </div>
        </div>
        <div className="mt-10 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="row-span-3 col-span-4 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
          <p className="text-[16px] w-[500]">
          My name is Ni Wayan Putri Satya Uttami an Undergraduate of Information
          Systems @ Universitas Pendidikan Ganesha. My role is a Junior Web
          Developer. I am BNSP Certified.
        </p></div>
          <div className="row-span-3 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4"></div>
          <div className="row-span-3 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4"></div>
          <div className="row-span-3 col-span-4 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4"></div>
        </div>
      </section>
    </>
  );
}
