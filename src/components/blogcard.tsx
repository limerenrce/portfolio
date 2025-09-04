"use client";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  content: string;
  author: string; 
  id: number;
  slug: string;
  tags: string[];
}

export default function Blogcard({
  title,
  content,
  author, 
  // id,
  slug,
  tags,
}: BlogCardProps) {
  // const [position, setPosition] = React.useState({ x: 0, y: 0 });
  // const [tooltipVisible, setTooltipVisible] = React.useState(false);
  // const divRef = React.useRef(null);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const bounds = divRef.current?.getBoundingClientRect();
  //   if (!bounds) return;
  //   setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  // };

  return (
    <Link href={`/blog/${slug}`}>
      <div
        // ref={divRef}
        // onMouseMove={handleMouseMove}
        // onMouseEnter={() => setTooltipVisible(true)}
        // onMouseLeave={() => setTooltipVisible(false)}
        className="relative max-w-sm rounded-xl bg-base-grey bg-[#F5F5F5] hover:shadow-lg duration-300"
      >
        {/* <span
        className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
        style={{
          top: position.y + 10,
          left: position.x + 10,
          opacity: tooltipVisible ? 1 : 0,
          transform: tooltipVisible ? "scale(1)" : "scale(0.6)",
          transition: "all 0.2s ease-out",
        }}
      >
        Read more
      </span> */}

        {/* <Image
          className="rounded-t-lg w-96 h-8 object-cover object-top"
          width={500}
          height={500}
          src={image}
          alt={title}
        /> */}
        <div className="rounded-t-lg w-96 h-8 object-cover object-top bg-gradient-to-tl from-[#6f6632] to-[#453f20]"></div>
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 truncate">
            {title}
          </h5>
          <div className="text-left text-sm text-gray-600 mb-4">
            by {author}
          </div>
          <div className="flex gap-2 mb-3">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="mb-3 text-gray-700 line-clamp-2 h-12">{content}</p>
          {/* <a
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
        </div>
      </div>
    </Link>
  );
}
