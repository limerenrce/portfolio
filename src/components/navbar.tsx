import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { assets } from '@/assets/assets';

export default function Navbar() {
  return (
    <>     
      <div className="border-black/10 border-b h-[60px] flex items-centes justify-between px-5">
      <Link href="/" className='flex items-center'>
        <Image 
        src={assets.logo}
        alt="Logo"
        width={100}
        height={100}
        className='rounded-full'
        priority
        />
      </Link>
      <ul className='flex items-center gap-3'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About me</Link></li>
        <li><Link href="#work">My Work</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
      </div>

    </>
  )
}
