"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-white shadow-md px-10 py-4'>
      {/* Logo */}
      <Image
        src='/images/logo.jpg'
        alt='Logo'
        width={50}
        height={50}
        className='h-6 w-24'
      />
      {/* Navigation Links */}
      <div className='space-x-6'>
        <Link
          href='/'
          className='text-blue-600 hover:text-blue-400 font-medium transition-colors duration-200'
        >
          Register
        </Link>
        <Link
          href='/patientdetails'
          className='text-blue-600 hover:text-blue-400 font-medium transition-colors duration-200'
        >
          Patient Details
        </Link>
      </div>
    </nav>
  );
}
