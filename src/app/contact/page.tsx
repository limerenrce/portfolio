export default function Contact() {
  return (
    <>
      <section>
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[500]">
              Let’s build something impactful together.
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
        <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-6 rounded-xl bg-base-grey bg-[#F5F5F5]">
            <div className="flex min-h-[500] justify-center  transition-colors duration-300">
              <div className="flex w-full transform flex-col overflow-hidden bg-[#F5F5F5] rounded-l-xl  transition-transform duration-300 md:flex-row ">
                <div className="w-full p-8 sm:p-10 md:w-1/2 lg:p-12">
                  {/* <div className="mb-6 flex items-center">
                    <svg
                      className="mr-3 h-10 w-10 text-gray-800 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <h1 className="bg-gray-800 bg-clip-text text-3xl font-bold text-transparent">
                      Contact Us
                    </h1>
                  </div>

                  <p className="mb-8 text-lg text-gray-600 ">
                    We are here to help! Reach out with questions, feedback, or
                    partnership opportunities.
                  </p> */}

                  <form className="space-y-5">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition  "
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700 ">
                        Email
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition  "
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700 ">
                        Subject
                      </label>
                      <select className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 transition  ">
                        <option>Hire Me</option>
                        <option>Technical Support</option>
                        <option>Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <textarea
                          placeholder="Your message here..."
                          className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition   "
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg text-gray-600 bg-base-grey bg-[#F5F5F5] transition-all duration-300 transform   hover:bg-[#5C5429] hover:text-yellow-300 px-6 py-3 font-medium shadow-md  hover:shadow-lg"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="flex w-full flex-col justify-start bg-[#5C5429] text-yellow-300 sm:p-10 md:w-1/2 lg:p-12 rounded-r-xl">
                  <h2 className="mb-6 text-2xl font-bold">
                    Other Ways to Connect
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Visit</h3>
                        <p className="opacity-90">
                          Taksu Tech
                          <br />
                          Cokroaminoto St No.394
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Call Us</h3>
                        <p className="opacity-90">
                          (0361) 123-4567
                          <br />
                          Mon-Fri, 9am-5pm WITA
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Support</h3>
                        <p className="opacity-90">
                          taksu@tech.com
                          <br />
                          24/7 customer support
                        </p>
                      </div>
                    </div>
                  </div>
 
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
