import React from 'react'
import "tailwindcss";
// import logo from "../assets/logo.png";
import logo1 from "../assets/Screenshot 2025-03-18 111754.png"
import email from "../assets/icons8-email-48.png"
import location from "../assets/icons8-location-50.png"
import phone from "../assets/icons8-phone-50.png"
import facebook from "../assets/icons8-facebook-30.png"

const Navbar = () => {
  return (
    <>
    <div className="bg-orange flex  flex-col  ">

        <div className='flex flex-raw bg-orange-500  h-12'>
            <div className=' flex flex-9 bg-orange-500 '>
                <img src={email} alt="Logo" className=" flex w-19 h-10  pt-2 pl-12" /><span className='pt-3 pl-2 text-white'>aquaengineering@gmail.com</span>
                <img src={location} alt="Logo" className=" flex w-18 h-9  pt-4 pl-12" /><span className='pt-3 pl-2 text-white'>Kurunduwaththa Rd ,Piliyandala ,Sri lanka </span>
                <img src={phone} alt="Logo" className=" flex w-18 h-9  pt-4 pl-12" /><span className='pt-3 pl-2 text-white'>+94 76 977 0968 </span>
            </div>

            

            <div className='flex-3 bg-slate-950 relative clip-left rounded-lb-md'>
                <img src={facebook} alt="Logo" className=" flex w-22 h-9  pt-4 pl-14" />
            </div>


        </div>

        <div className='flex bg-white h-22 '>
        
            <nav className="container flex flex-raw  ">
            
                <div className='flex flex-4'>
                    <img src={logo1} alt="Logo" className=" flex w-auto  h-auto pt-3 pl-12" />
                </div>    
                
                
                <ul className=" flex flex-8 space-x-8   font-bold-100  pt-7 justify-end pr-20 "> 
                    <li><a href="#home" className="hover:text-orange-300">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-300">AboutUs</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#contacts" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#contacts" className="hover:text-gray-300">ContactUs</a></li>
                </ul>
            </nav>

        </div>
        

    </div>

    </>



  );
};

export default Navbar;