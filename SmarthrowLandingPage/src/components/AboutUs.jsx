import React from 'react'
import {aboutUsItems} from '../constants/AboutUsItems.jsx'
import { CheckCircle2, Hourglass } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="mt-20">
        <div className="text-center">
            <span className="bg-neutral-100 text-orange-500 rounded-full h-6
            text-sm font-medium px-2 py-1 uppercase">
                ABOUT US
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking
            wide">
                About {" "} 
                <span className="bg-gradient-to-r from-orange-500 to-orange-800
                text-transparent bg-clip-text">
                    SMARThrow
                </span>
            </h2>
            <p className="mx-auto mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Shoulder and elbow overuse injuries are highly prevalent in handball,
                yet monitoring throwing load has until now been a major challenge.
                <br></br>
                <br></br>
                SMARThrow is being developed to give coaches and players a simple, 
                science-based tool for monitoring throwing load, 
                helping to reduce injury risk and improve performance.
                <br></br>
                <br></br>    
                 Building on the world’s largest handball throwing dataset and machine learning, 
                 our system is grounded in years of research and real-world testing with elite clubs.
                <br></br>
                <br></br>                  
                 Our team combines world leading handball researchers, developers, coaches,
                  and former professional athletes to deliver a reliable and usefull solution for the future of handball.
            </p>
        </div>
        
      <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
<div className="p-2 w-full lg:w-1/2">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide
                 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
                <span>
                    SMARThrow is a work in progress 
                </span>
                <span className="block bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    here’s how far we’ve come
                </span>
            </h2>
        </div>
        
         
        <div className="pt-12 w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aboutUsItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="mx-6 bg-neutral-200 h-10
                        w-10 p-2 justify-center items-center rounded-full">
                            {item.completed ? <CheckCircle2 className="text-green-400" /> : <Hourglass />}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-mb text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>    
    </div>
  )
}

export default AboutUs
