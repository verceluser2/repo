/* eslint-disable @next/next/no-img-element */
import React from "react";

const Build = () => {
  return (
    <div className="mt-10 pb-4">
      <div className="mycontainer">
        <div className="px-4">
          <div className="flex flex-col lg:flex-row-reverse lg:items-center mt-12">
            <div className="lg:flex-1 mt-2">
              <img
                src="/nft.png"
                alt=""
                className="h-auto max-h-full min-w-full"
              />
            </div>

            <div className="flex lg:flex-1 flex-col gap-3">
              <div>
                <span className="gradient-text text-[0.875rem] font-semibold">
                  SYNC AND TRACK
                </span>
              </div>
              <div>
                <h3 className="text-[32px] font-[700] text-white">
                  Built on Web3. Owned by you.
                </h3>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-customGray-main">
                  Unlike Palpatine, we love democracy. That’s why our platform
                  is designed to be governed by you. Want leveraged exposure on
                  your favorite crypto assets? Get enough people from the DApp
                  Mainnet community to back you and the protocol will
                  automatically add it as an exchange. Want to passively earn
                  high yields from trade fees and FST rewards? Simply provide
                  liquidity.
                </p>
              </div>
              <div className="mt-3 lg:mt-5 sm:flex-row sm:justify-between sm:items-center flex flex-col gap-3">
                <a href="/solutions">
                  <button className="h-[2.5rem] text-center rounded-[30px] w-[180px] bg-gradient-to-r from-primary-dark to-primary-light text-white border-0">
                    Explore Solution
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
