import Breadcrumb from "@/components/breadcrumb";

export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return (
    <>
    <section>
      <Breadcrumb/>

      <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">
              Blog
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

   <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
          <div className="col-span-6 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-white p-4">
          <div className="text-left">
        
        <ul>
        {data.posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <a
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
        </div> 
        </div>
      
    </section>
   
    </>
  );
}
