export default async function Page({ params }) {
  const id = (await params).id;
  const response = await fetch(`http://localhost:8000/api/v1/blog/${id}`);
  const data = await response.json();
  return (
    <>
      <section>
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">Blog</h1>
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

        <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-6 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
            <h3 className="text-left text-3xl font-bold">
              {data.title}
            </h3>
            <div className="text-left">
              {data.author.name}
            </div>
            <div className="text-left mt-4">
              {data.content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
