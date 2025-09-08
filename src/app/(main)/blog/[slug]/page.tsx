import { BlogPost } from "@/assets/types";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const response = await fetch(
    `http://localhost:8000/api/v1/blog/show/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return <div className="p-6 text-red-600">Post not found.</div>;
  }

  const data: BlogPost = await response.json();

  return (
    <section>
      <div className="grid grid-cols-4 auto-rows-[100px] gap-2 pt-5">
        <div className="col-span-3 text-left">
          <h1 className="text-4xl capitalize font-bold mb-2">{data.title}</h1>
          <div className="text-left text-sm text-gray-600 ml-1">
            by {data.author?.name} | created on {data.created_at}
          </div>
          <div className="flex text-left text-sm text-gray-600 mb-3 ml-1">
            <p className="py-1 pr-2 gap-2">Tags: </p>{data.tags?.map((tag) => (
              <span
                key={tag}
                className="py-1 px-2 gap-2"
              >
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
              // normalize "\n" and "\\n"
              .replace(/\\n/g, "\n")
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
