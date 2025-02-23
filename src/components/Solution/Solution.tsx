import React from "react";
import { data } from "../../lib/data";

const Solution = () => {
  return (
    <div className="mt-4 pb-8">
      <div className="mycontainer">
        <div className="px-4">
          <div>
            <h2 className="text-center text-[32px] lg:text-[64px] font-bold text-white">
                 SYNCHRONIZATION
            </h2>
          </div>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row flex-wrap lg:pl-10">
            {data.map((item, index) => ( 
              <a href={item.url} key={index}>
                <div className="p-[24px] bg-[#ffffff0d] rounded-[10px] flex-grow-0 lg:w-[240px] flex items-center flex-col gap-3 hover:border-[1px] hover:border-[#01EEA0]">
                    <h4 className="text-[1.25rem] text-white font-[700]">{item.name}</h4>

                    <p className="text-[18px] font-[400] text-customGray-main text-center">{item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
