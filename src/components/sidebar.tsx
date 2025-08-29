"use client";

import { assets } from "@/assets/assets";
import { Url } from "next/dist/shared/lib/router/router";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sideItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-house"
        viewBox="0 0 16 16"
      >
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cup-straw"
        viewBox="0 0 16 16"
      >
        <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82q0 .069-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87s-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A1 1 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278M9.768 4.607A14 14 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.3 3.3 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a6 6 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69s2.081-.441 2.438-.69c.042-.029.09-.094.102-.215l.852-8.03a6 6 0 0 1-.435.127 9 9 0 0 1-.89.17zM4.467 4.884s.003.002.005.006zm7.066 0-.005.006zM11.354 5a3 3 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222" />
      </svg>
    ),
  },
  {
    id: "project",
    label: "Project",
    href: "/project",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-collection"
        viewBox="0 0 16 16"
      >
        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
      </svg>
    ),
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-pencil-square"
        viewBox="0 0 16 16"
      >
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path
          fillRule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
        />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-person-lines-fill"
        viewBox="0 0 16 16"
      >
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: Url) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path as string);
  };

  return (
    <>
      <aside className="w-64 fixed h-screen p-4">
        <div className="flex flex-col items-center mt-10 -mx-2">
          <Image
            className=" object-cover w-35 h-35 translate-y-10 mx-2 rounded-full"
            src={assets.user_me}
            alt="avatar"
          />
        </div>
        <div className=" flex flex-col pt-10 bg-base-grey bg-[#F5F5F5] text-gray-900 rounded-lg">
          <h4 className="text-center mt-2 font-medium text-gray-800 ">
            Satya Uttami
          </h4>
          <p className=" mt-1 text-center text-sm font-medium text-gray-600 ">
            satyautta@gmail.com
          </p>

          <div className="mt-3 justify-between flex-1 ">
            <nav>
              <ul>
                {sideItems.map((eachItem) => (
                  <li key={eachItem.id}>
                    <Link
                      className={`${
                        isActive(eachItem.href)
                          ? "flex items-center px-4 py-2 m-5 text-yellow-300 bg-[#5C5429] rounded-lg  "
                          : "flex items-center px-4 py-2 m-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#5C5429] hover:text-yellow-300"
                      }`}
                      href={eachItem.href}
                    >
                      {eachItem.icon}

                      <span className="mx-4 font-medium">{eachItem.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
