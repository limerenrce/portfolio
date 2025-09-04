"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <>
      <div className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
        {/* Only render breadcrumb if not on homepage */}
        {segments.length > 0 && (
          <>
            {segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/");
              const isLast = index === segments.length - 1;

              return (
                <div key={index} className="flex items-center space-x-2">
                  {index === 0 && (
                    <Link href="/" className="hover:text-slate-700 capitalize">
                      Home
                    </Link>
                  )}

                  {/* Separator arrow */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path
                      d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
                      fill="currentColor"
                    />
                  </svg>

                  {/* Breadcrumb link or text */}
                  {isLast ? (
                    <span className="text-indigo-500 capitalize">
                      {segment}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="hover:text-slate-700 capitalize"
                    >
                      {segment}
                    </Link>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
