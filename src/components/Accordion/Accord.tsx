import React from "react";

const Accord = () => {
  return (
    <div className="mt-4 pb-8" id="faq">
      <div className="mycontainer navConn">
        <div className="px-4">
          <div>
            <h2 className="text-center text-[32px] lg:text-[64px] font-bold gradient-text">
              FAQ
            </h2>

            <p className="text-center text-customGray-main text-[18px]">Here are some of our most frequently asked questions.</p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium text-white">
                What is DApp Mainnet?
              </div>
              <div className="collapse-content text-customGray-main font-[400]">
                <p>
                  DApp Mainnet is a platform designed to address common issues
                  faced by Web3 applications, such as scalability,
                  interoperability, and user adoption. We focus on creating a
                  secure and efficient environment for decentralized
                  applications to thrive.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white">
                How does DApp Mainnet ensure the security of my funds?
              </div>
              <div className="collapse-content text-customGray-main font-[400]">
                <p>
                  We prioritize the security of your funds above all else. DApp
                  Mainnet has undergone multiple audits from renowned security
                  firms such as Open Zeppelin and Trail of Bits. Additionally,
                  our code has been reviewed by white hat researchers to ensure
                  robust security measures are in place.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white ">
                How is the platform governed?
              </div>
              <div className="collapse-content text-customGray-main font-[400]">
                <p>
                  DApp Mainnet is designed to be governed by the community.
                  Unlike centralized authorities, we believe in democracy and
                  user participation. Community members can propose and vote on
                  various aspects of the platform, ensuring that it evolves
                  according to the users needs and preferences.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white ">
                How can I earn high yields on DApp Mainnet?
              </div>
              <div className="collapse-content text-customGray-main font-[400]">
                <p>
                  You can passively earn high yields by providing liquidity on
                  our platform. This enables you to earn trade fees and FST
                  rewards, maximizing your earnings while contributing to the
                  platform&apos;s liquidity.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white ">
                Can I get leveraged exposure on my favorite crypto assets?
              </div>
              <div className="collapse-content text-customGray-main font-[400]">
                <p>
                  Yes, you can! If you gather enough support from the DApp
                  Mainnet community, the protocol will automatically add the
                  desired crypto asset as an exchange option, allowing leveraged
                  exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accord;
