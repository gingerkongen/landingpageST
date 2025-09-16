import React, {useState} from 'react'
import sortlogo from "../assets/sortlogo.svg"
import {Menu, X} from "lucide-react";


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b
    border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-50 mr-2" src={sortlogo} alt="sortlogo" />
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    <li key="1">
                        <a href="#">Features</a>
                    </li>
                    <li key="2">
                        <a href="#">About us</a>
                    </li>
                    <li key="3">
                        <a href="#">Pricing</a>
                    </li>                                        
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Web App Login
                    </a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 border rounded-md">
                        Request Onboarding
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X />
                        : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-200 w-full p-12
                flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        <li key="1" className="py-4">
                            <a href="#">Features</a>
                        </li>
                        <li key="2" className="py-4">
                            <a href="#">About us</a>
                        </li>
                        <li key="3" className="py-4">
                            <a href="#">Pricing</a>
                        </li>                          
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md">Web App Login</a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 border rounded-md">
                            Request Onboarding
                        </a>                        
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar;
