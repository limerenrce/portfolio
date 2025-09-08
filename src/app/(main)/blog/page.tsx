import { BlogPost } from "@/assets/types";
import Blogcard from "@/components/blogcard";

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    const response = await fetch("http://localhost:8000/api/v1/blog/read", {
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      posts = data.posts || [];
    }
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    // fallback to empty posts
    posts = [];
  }

  return (
    <section>
      {/* PAGE TITLE */}
      <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
        <div className="col-span-3 text-left">
          <h1 className="text-4xl capitalize font-bold mb-4 w-[400]">Writing Thoughts on The Internet</h1>
        </div>
        <div className="col-span-1">
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post: BlogPost) => (
            <Blogcard 
              key={post.id}
              id={post.id}
              title={post.title}
              tags={post.tags}
              content={post.content || "No description available"}
              author={post.author}
              slug={post.slug}
              created_at={post.created_at}
            />
          ))
        ) : (
          <div className="grid auto-rows-[100px] grid-cols-5 gap-6">
          

          <div className="relative overflow-hidden row-span-1 col-span-3 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5]">
           
                <div className="p-2">
                  <h3 className="text-2xl font-bold text-gray-900">SORRY</h3>
                  <p className="text-gray-500"> No blog posts available right now.   </p>
                </div>  
              
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
