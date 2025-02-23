"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Roadmap", href: "#roadmap" },
    { title: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-emerald-500">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos.png"
              alt="Logo"
              width={70}
              height={70}
              //   className="w-8 h-8"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Mobile Menu (Dropdown) */}
          {isOpen && (
            <div className="absolute top-16 right-4 w-[200px] bg-[#2c5241] rounded-lg shadow-lg py-2 border border-white-700">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-white hover:bg-[#0a1f75] px-4 py-2 text-sm text-center"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.title}
                </Link>
              ))}
              <div className="px-4 py-2">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded">
                  <Link href="/syncwallets">Connect Wallet</Link>
                </button>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white hover:text-emerald-100"
              >
                {item.title}
              </Link>
            ))}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded">
              <Link href="/syncwallets">Connect Wallet</Link>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
