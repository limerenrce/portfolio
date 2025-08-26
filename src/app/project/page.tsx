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
        <Breadcrumb/>
        
        {/* PAGE TITLE */}
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">
              My Works
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


        {/* PAGE CONTENT */}
        <div className="mt-10 grid auto-rows-[100px] grid-cols-6 gap-6">
          <div className="row-span-3 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white">
            <Link href="/project/selingan">
              <Image
                className="rounded-xl h-full object-cover"
                src={assets.selingan_tb}
                alt="card-image"
              />
            </Link>
          </div>
          <div className="row-span-3 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white">
            <Link href="/project/sushiman">
              <Image
                className="rounded-xl h-full object-cover"
                src={assets.sushiman_tb}
                alt="card-image"
              />
            </Link>
          </div>
          <div className="row-span-3 col-span-3 rounded-xl border bg-white border-slate-200 shadow-slate-950/5 shadow-sm overflow-hidden">
            <div className="flex">
              <div className="col-span-1 w-2/5">
                <Image
                  className="object-cover"
                  src={assets.project}
                  alt="card-image"
                />
              </div>
              <div className="col-span-2">
                <div className="p-4">
                  <small className="font-sans antialiased text-sm mb-4 font-bold uppercase text-slate-600">
                    webdev
                  </small>
                  <h5 className="font-sans antialiased font-bold text-lg md:text-xl lg:text-2xl text-current mb-2">
                    Selingan
                  </h5>
                  <p className="font-sans antialiased text-base mb-8 text-slate-600">
                    Like so many organizations these days, A
                  </p>
                  <a
                    className="border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 mb-2 flex w-fit items-center gap-2"
                    href="#"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey">
            <Image
              className="rounded-xl h-full object-cover"
              src={assets.project}
              alt="card-image"
            />
            <Link
              className="z-100 border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 mb-2 flex w-fit items-center gap-2"
              href="#"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="mt-10">
          <div className="rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 flex h-full w-full max-w-[48rem] flex-row">
            <Image
              className="w-2/5 object-cover"
              src={assets.project}
              alt="card-image"
            />
            <div className="w-full h-max rounded p-4">
              <small className="font-sans antialiased text-sm mb-4 font-bold uppercase text-slate-600">
                startups
              </small>
              <h5 className="font-sans antialiased font-bold text-lg md:text-xl lg:text-2xl text-current mb-2">
                Lyft launching cross-platform service this week
              </h5>
              <p className="font-sans antialiased text-base mb-8 text-slate-600">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
              <a
                className="border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 mb-2 flex w-fit items-center gap-2"
                href="#"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
