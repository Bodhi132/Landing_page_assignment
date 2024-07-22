import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { VscRequestChanges } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className=' w-5/6 mx-auto my-5 bg-black rounded-2xl space-y-4'>
        <img src="/logo-dark.png" alt=""  className='mx-auto'/>
        <div className='flex flex-wrap justify-center'>
            <div>
                <div className='flex items-center'>
                    <IoIosPhonePortrait className=' text-[#98A2B3] text-xs'/>
                    <p className=' text-[#98A2B3] text-xs'>Contact</p>
                </div>
                <p>+91 0000000000</p>
            </div>
            <div>
                <div className='flex items-center'>
                    <CgMail className=' text-[#98A2B3] text-xs'/>
                    <p className=' text-[#98A2B3] text-xs'>Mail</p>
                </div>
                <p>demo@gmail.com</p>
            </div>
            <div>
                <div className='flex items-center'>
                    <IoLocationOutline className=' text-[#98A2B3] text-xs'/>
                    <p className=' text-[#98A2B3] text-xs'>Adress</p>
                </div>
                <p>Mumbai, India</p>
            </div>
            <div>
                <div className='flex items-center'>
                    <VscRequestChanges className=' text-[#98A2B3] text-xs'/>
                    <p className=' text-[#98A2B3] text-xs'>Leave a request</p>
                </div>
                <p>Leave a request</p>
            </div>
        </div>
        <p className='text-center text-[#98A2B3] text-xs py-3'>We work throughout the world</p>
    </div>
  )
}

export default Footer