"use client";

import { BlogPost } from "@/assets/types";
import Blogcard from "@/components/blogcard";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 

  useEffect(() => { 
    fetchPosts(); 
    const interval = setInterval(() => {
      fetchPosts();
    }, 10000);
 
    return () => clearInterval(interval);
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/blog/read");
      if (!res.ok) throw new Error("API unavailable");
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error("Failed to fetch posts", err);
      setError(true);  
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <>
        <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
          <div className="col-span-3 text-left">
            <h1 className="text-4xl capitalize font-bold mb-4 w-[400]">
              Writing Thoughts on The Internet
            </h1>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="text-center py-10 text-gray-500 min-h-[500]">
          <h2 className="text-2xl font-semibold mb-2">Loading..</h2>
          <p>Please wait, we still make the connection.</p>
        </div>
      </>
    );

  return (
    <section>
      {/* PAGE TITLE */}
      <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
        <div className="col-span-3 text-left">
          <h1 className="text-4xl capitalize font-bold mb-4 w-[400]">
            Writing Thoughts on The Internet
          </h1>
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* BLOG LIST */}
      {error ? (
        <div className="text-center py-10 text-gray-500 min-h-[300]">
          <h2 className="text-2xl font-semibold mb-2">No Data Available</h2>
          <p>The API connection failed, but you can still access the panel.</p>
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: BlogPost) => (
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
            ))}
          </div>
        </>
      )}
      {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-gray-500">
                  {" "}
                  No blog posts available right now.{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </section>
  );
}
