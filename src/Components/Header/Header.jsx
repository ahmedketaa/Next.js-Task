
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link className='text-black'  href="/" >
          Home
        </Link>
        <Link className='text-black'  href="/about-us">
          About
        </Link>
        <Link className='text-black'  href="/add-post">
          Add Post
        </Link>
        <Link className='text-black' href="/contact-us">Contact Us</Link>
        <Link className='text-black' href="/posts">Posts</Link>
        <Link className='text-black' href="/login">Login</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
