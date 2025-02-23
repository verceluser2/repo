/* eslint-disable @next/next/no-img-element */
import React from "react";

const Works = () => {
  return (
    <div className="mt-20 pb-4">
      <div className="navCon mycontainer ">
        <div className="px-4 ">
          <div>
            <h2 className="text-center text-[32px] lg:text-[64px] font-bold text-white">
              Take Full Control of Your Crypto
            </h2>
          </div>
          <div>
            <p className="text-center text-[1.125rem] text-customGray-main">
              Built on Arbitrum and Avalanche, our decentralized leverage
              trading exchange focuses on being the best execution environment
              for trades.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-12 lg:mt-20">
            <div className="sm:flex-row flex flex-col items-center gap-3">
              <div className="flex sm:flex-1 items-center py-8 lg:py-12 px-3 gap-3 bg-[#ffffff0d] rounded-[10px] ">
                <div className="w-[100px] h-auto">
                  <img
                    src="/icon-01.png"
                    alt="icon"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="pl-[15px] lg:pl-[30px]">
                  <h3 className="lg:text-[28px] text-[16px] text-white font-semibold">Your funds are as secure as possible</h3>
                </div>
              </div>
              <div className="flex sm:flex-1 items-center gap-3 py-8 lg:py-12 px-3 bg-[#ffffff0d] rounded-[10px]">
                <div className="w-[100px] h-auto">
                  <img
                    src="/icon-02.png"
                    alt="icon"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="pl-[15px] lg:pl-[30px]">
                  <h3 className="lg:text-[28px] text-[16px] text-white font-semibold">Built by seasoned crypto veterans</h3>
                </div>
              </div>
            </div>
            <div className="sm:flex-row flex flex-col items-center gap-3">
              <div className="flex sm:flex-1 items-center gap-3 py-8 lg:py-12 px-3 bg-[#ffffff0d] rounded-[10px]">
                <div className="w-[100px] h-auto">
                  <img
                    src="/icon-03.png"
                    alt="icon"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="pl-[15px] lg:pl-[30px]">
                  <h3 className="lg:text-[28px] text-[16px] text-white font-semibold">Constant reviews and testing of our platform</h3>
                </div>
              </div>
              <div className="flex sm:flex-1 items-center py-8 lg:py-12 px-3 gap-3 bg-[#ffffff0d] rounded-[10px]">
                <div className="w-[100px] h-auto">
                  <img
                    src="/icon-04.png"
                    alt="icon"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="pl-[15px] lg:pl-[30px]">
                  <h3 className="lg:text-[28px] text-[16px] text-white font-semibold">Fully decentralized and non-custodial</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
