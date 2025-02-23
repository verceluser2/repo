/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
  return (
    <div className='pt-28 lg:pt-[170px] lg:pb-[100px] pb-[28px] flex items-center' id='home'>
        <div className="mycontainer">
            <div className='px-4 flex-col gap-14 lg:gap-0 lg:flex-row flex items-center justify-center'>
                <div className='lg:flex-1 flex flex-col gap-5 items-center lg:items-start'>
                    <h2 className='text-white text-[30px] hero-text font-bold lg:text-[60px] lg:leading-[4.2rem]'>Wallet Troubleshooter</h2>
                    <p className='text-customGray-main text-center lg:text-left lg:text-[1.3rem]'>DApp Mainnet focuses on addressing common issues faced by Web3 applications, such as scalability, interoperability, and user adoption.</p>
                    <a href="/solutions">
                        <button className='h-[2.5rem] text-center rounded-[30px] w-[180px] bg-gradient-to-r from-primary-dark to-primary-light text-white border-0'>
                            Explore Solution
                        </button>
                    </a>
                </div>
                <div className='lg:block  lg:flex-1'>
                    <img src="/hero.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero