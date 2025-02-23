/* eslint-disable @next/next/no-img-element */
import React from "react";

const Platform = () => {
  return (
    <div className="mt-20 pb-4" id="about">
      <div className="mycontainer">
        <div className="px-4">
          <div>
            <h2 className="text-center text-[32px] lg:text-[64px] font-bold text-white">
            About the platform
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center mt-12">
                <div className="lg:flex-1 mt-2">
                    <img src="/decen.png" alt="" className="h-full w-full object-cover"/>
                </div>

                <div className="flex lg:flex-1 flex-col gap-3">
                    <div>
                        <span className="gradient-text text-[0.875rem] font-semibold">SYNC AND TRACK</span>
                    </div>
                    <div>
                        <h3 className="text-[32px] font-[700] text-white">Fully decentralized. Completely secure.</h3>
                    </div>
                    <div>
                        <p className="text-[18px] font-[400] text-customGray-main">We have all been in this industry too long not to make the security of your funds our absolute top priority. We’ve received multiple audits from Open Zeppelin and Trail of Bits, as well as code reviews from white hat researchers.</p>
                    </div>
                    <div className="lg:mt-5 sm:flex-row sm:justify-between sm:items-center flex flex-col gap-3">
                        <div>
                            <h5 className="text-[28px] font-[700] text-white">10,834</h5>
                            <span className="text-[18px] font-[400] text-customGray-main">Accounts Successfully Rectified.</span>
                        </div>
                        <div>
                            <h5 className="text-[28px] font-[700] text-white">4,500+</h5>
                            <span className="text-[18px] font-[400] text-customGray-main">Collections Indexed
                            every 5mins.</span>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
