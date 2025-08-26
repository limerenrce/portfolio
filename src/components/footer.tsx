import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex  md:flex-row gap-3 items-center justify-around w-full py-4 text-sm  border-black/10 border-t mt-20 px-5 h-[40px] ">
        <p>Copyright © 2025 Uttami. All rights reservered.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-all">
            Blog
          </a>
          <div className="h-8 w-px bg-white/20"></div>
          <a href="#" className="hover:text-white transition-all">
            Contact me
          </a>
        </div>
      </footer>
    </>
  );
}
