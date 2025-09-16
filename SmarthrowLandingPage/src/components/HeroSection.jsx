import React from 'react'
import detailedpage from "../assets/DetailedPage.png"
import periodpage from "../assets/PeriodPage.png"
import heroimage from "../assets/HeroImg.png"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        SMARThrow: the future of handball is
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> data-driven</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Our sensor intelligence and science based
        throwing metrics enable data-driven coaching decisions
        to improve throwing performance and reduce injury risk.
      </p>
      <div className="flex justify-center my-10">
        <a href="mailto:support@smarthrow.com"
        aria-label="Email support at smarthrow dot com" 
        className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3
        rounded-md">
            Book a free consultation
        </a>
        <a href="mailto:support@smarthrow.com"
          aria-label="Email support at smarthrow dot com"
          className="py-3 px-4 mx-3 rounded-md border">
            Contact us
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img className="rounded-lg w-4/5 border border-orange-700 shadow-orange-400
        mx-2 my-4" src={heroimage} alt="detailedpage"></img>       
      </div>

    </div>
  )
}

export default HeroSection
