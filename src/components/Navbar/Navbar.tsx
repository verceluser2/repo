/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Change 100 to the scroll position you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 fixed top-0 z-50 w-full ${
        isScrolled ? "bg-[#0c0c43]" : "bg-transparent"
      }`}
    >
      <div className="mycontainer">
        <div
          className={`navbar shadow-lg ${
            isScrolled ? "" : "border-b-[1px] border-b-customGray-main"
          }`}
        >
          <div className="navbar-start">
            <div className="h-[50px] w-[65px]">
              <a href="/">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="h-full w-full object-cover"
                />
              </a>
            </div>
          </div>

          <div className="hidden lg:navbar-center lg:flex text-white">
            <ul className=" flex items-center gap-7">
              <li>
                <a
                  href="/solutions"
                  className="hover:text-gray-500 font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  Synchronize
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="hover:text-gray-500 font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  Token Swap
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="hover:text-gray-500 font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-500 font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:navbar-end lg:flex text-white">
            <a href="/solutions">
              <button className="bg-gradient-to-r from-primary-dark to-primary-light h-[2.5rem] text-center rounded-[30px] w-[180px] text-white border-0">
                Explore Solution
              </button>
            </a>
          </div>

          <div className="navbar-end lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content flex flex-col gap-2 top-14 right-0 text-white font-bold bg-[#020024] rounded-box z-[1] mt-3 w-52 p-3 shadow"
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="/solutions">Synchronize</a>
                </li>
                <li>
                  <a href="/solutions">Token Swap</a>
                </li>
                <li>
                  <a href="/solutions">Marketplace</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
