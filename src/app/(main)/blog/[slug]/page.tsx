"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlogPost } from "@/assets/types";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/blog/show/${slug}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) throw new Error("Post not found");

        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500 min-h-[300px] mt-36">
        <h2 className="text-2xl font-semibold mb-2">Loading...</h2>
        <p>Please wait while we fetch the post.</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-6 text-red-600 mt-10">
        <h2 className="text-2xl font-bold mb-2">Post not found</h2>
        <p>We couldn’t find the blog post you are looking for.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
        <div className="col-span-3 text-left">
          <h1 className="text-4xl capitalize font-bold mb-2">{data.title}</h1>
          <div className="text-left text-sm text-gray-600 ml-1">
            by {data.author?.name} | created on {data.created_at}
          </div>
          <div className="flex text-left text-sm text-gray-600 mb-3 ml-1">
            <p className="py-1 pr-2 gap-2">Tags: </p>
            {data.tags?.map((tag) => (
              <span key={tag} className="py-1 px-2 gap-2">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid auto-rows grid-cols-6 gap-6">
        <div className="col-span-6 rounded-xl border-2 border-slate-400/10 bg-base-grey bg-[#F5F5F5] p-4">
          <div className="text-left leading-relaxed">
            {data.content
              ?.replace(/\\n/g, "\n")
              .split("\n")
              .map((paragraph, index) =>
                paragraph.trim() ? (
                  <p key={index} className="mb-8">
                    {paragraph}
                  </p>
                ) : null
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
