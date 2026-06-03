"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

    <Link
      href="/"
      className="text-3xl font-extrabold tracking-tight group inline-block"
    >
      <span className="text-blue-500 group-hover:text-black transition-colors duration-500">
        News
      </span>

      <span className="text-black group-hover:text-blue-500 transition-colors duration-300">
        Hub
      </span>
    </Link>

        <div className="hidden md:flex gap-6 font-medium text-black">
          <Link className="text-blue-500 hover:text-black transition-all duration-300" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-500 transition-all duration-300" href="/news/sports">
            Sports
          </Link>
          <Link className="hover:text-blue-500 transition-all duration-300" href="/news/business">
            Business
          </Link>
          <Link className="hover:text-blue-500 transition-all duration-300" href="/news/technology">
            Technology
          </Link>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white border-t text-black">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/news/sports" onClick={() => setIsOpen(false)}>
            Sports
          </Link>
          <Link href="/news/business" onClick={() => setIsOpen(false)}>
            Business
          </Link>
          <Link href="/news/technology" onClick={() => setIsOpen(false)}>
            Technology
          </Link>
        </div>
      )}
    </nav>
  );
}