import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import DetailedPage from '../assets/workflow.png'
import {workflowItems} from '../constants/WorkflowItems.jsx'

const Workflow = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <span className="bg-neutral-100 text-orange-500 rounded-full h-6
        text-sm font-medium px-2 py-1 uppercase">
            WORKFLOW
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking
        wide">
            Robust and easy {" "} 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800
            text-transparent bg-clip-text">
                workflow
            </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
            <img src={DetailedPage} alt="Dashboard" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
            {workflowItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                    <div className="text-green-400 mx-6 bg-neutral-200 h-10
                    w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle2 />
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
  )
}

export default Workflow
