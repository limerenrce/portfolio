import Blogcard from "@/components/blogcard";

export default async function BlogPage() {
  const response = await fetch("http://localhost:8000/api/v1/blog/read", {
    cache: "no-store", // disable caching if needed
  });
  const data = await response.json();

  return (
    <section>
      {/* PAGE TITLE */}
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[300]">
              Blog
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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.posts.map((post: any) => (
          <Blogcard
            key={post.id}
            id={post.id}
            title={post.title}
            tags={post.tag}
            content={post.content || "No description available"}
            author={post.author?.name || "Unknown"}
            // image={
            //   post.image ??
            //   assets.blog_df
            // }
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
