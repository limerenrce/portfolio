export default function BentoGrid() {
  return (
    <>
     <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="grid grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Box 1 */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
          <h2 className="text-4xl font-bold">100+</h2>
          <p className="text-sm mt-2">Completed Projects</p>
        </div>

        {/* Box 2 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
          <h2 className="text-2xl font-semibold">Webflow Expert</h2>
        </div>

        {/* Box 3 */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
          <h2 className="text-4xl font-bold">6</h2>
          <p className="text-sm mt-2">Years Experience</p>
        </div>

        {/* Box 4 */}
        <div className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 flex flex-col justify-center shadow-lg">
          <h2 className="text-xl font-semibold">Your ultimate web partner</h2>
          <p className="text-sm mt-2 text-gray-300">
            Eliminate the hassle of working with developers lacking design sense.
            I combine expertise, passion, and vision to make your ideas real.
          </p>
          <a href="#contact" className="mt-4 inline-block text-purple-400 hover:text-purple-300 underline">
            Get in touch →
          </a>
        </div>

        {/* Box 5 */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
          <h2 className="text-3xl font-bold">50+</h2>
          <p className="text-sm mt-2">Satisfied Clients</p>
        </div>
      </div>
    </div>

    {/* <div className="grid auto-rows-[150px] grid-cols-4 gap-6">
          <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">A</div>
          <div className="row-span-3 col-span-2 grid grid-cols-2 gap-6">
            <div className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">B</div>
            <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">C</div>
            <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">D</div>
          </div>
          <div className="row-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">E</div>
          <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">F</div>
          <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">G</div>
          <div className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">H</div>
        </div> */}
      {/* <section className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl shadow-zinc-600/40 rounded-2xl overflow-hidden shrink-0">
          <Image
            className="max-w-md w-full object-cover rounded-2xl"
            src={assets.user_image}
            alt=""
            width={200}
          />
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            Welcome To My Portfolio!
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-zinc-400 to-[#DDD9FF]"></div>
          <p className="mt-8">
            Ni Wayan Putri Satya Uttami.{" "}
          </p>
          <p className="mt-4">
            Software Developer.
          </p>
          <p className="mt-4">
            From UI design systems to automation-ready layouts, PrebuiltUI
            empowers you to build beautifully and scale effortlessly.
          </p>
          <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-zinc-600 to-[#FFFFFF] py-3 px-8 rounded-full text-white">
            <span>Read more</span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </section> */}
    </>
   

    
  );
}
