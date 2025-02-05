"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Brand
        </Link>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul
          className={`md:flex space-x-4 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto left-0 top-14 md:top-0 transition-all duration-300 ease-in-out transform ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="/" className="text-white block px-4 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white block px-4 py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/counter" className="text-white block px-4 py-2">
              Counter
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white block px-4 py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
