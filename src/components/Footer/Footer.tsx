/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mycontainer">
        <div className="">
          <footer className="border-t-[1px] border-b-customGray-main footer text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
              <img src="/logo.png" alt="logo" className="w-[50px] h-[50px]"/>
              <p className="font-bold">
                Copyright © ${new Date().getFullYear()} - All right reserved
              </p>
            </aside>

            <nav className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
                <ul className="flex items-center gap-4 font-bold">
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms of use</a></li>
                </ul>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
