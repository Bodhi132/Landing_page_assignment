"use client";
import React, { useState } from 'react'
import { CiMobile1 } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {

    const NavMenu = [
        {
            name: 'Services',
            link: '/Services'
        },
        {
            name: 'Media',
            link: '/Media'
        },
        {
            name: 'Cases',
            link: '/Cases'
        },
        {
            name: 'FAQ',
            link: '/FAQ'
        },
        {
            name: 'Contacts',
            link: '/Contacts'
        }
    ]

    const [menu, setMenu] = useState(false)

    return (
        <>
            <div className=' h-[5.8rem] w-[30rem] md:w-[40rem] lg:w-[60rem] xl:w-[76.5rem] flex items-center justify-between bg-white rounded-3xl md:px-4 lg:px-5 xl:px-10 z-50 relative'>
                <div className=' flex items-center justify-between space-x-5 mr-2 w-full lg:w-auto'>
                    <img src='/company-logo.png' alt='logo' className=' block' />
                    <div className='lg:flex xl:space-x-5 lg:space-x-2 hidden'>
                        {
                            NavMenu.map((item, index) => (
                                <div key={index} className=' lg:text-xs xl:text-base cursor-pointer'>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                    <div className='lg:hidden cursor-pointer'>
                        <RxHamburgerMenu onClick={() => setMenu(!menu)} />
                    </div>
                </div>
                {menu && <div className='flex flex-col absolute top-[6rem] rounded-xl py-7 space-y-3 bg-white w-full px-10 z-50'>
                    {
                        NavMenu.map((item, index) => (
                            <div key={index} className=' font-semibold cursor-default'>
                                {item.name}
                            </div>
                        ))
                    }
                </div>}
                <div className='lg:flex hidden xl:space-x-6 lg:space-x-3'>
                    <div className=' flex items-center lg:text-xs'>
                        <CiMobile1 className=' mr-2' />
                        <p className=' mr-3'>+91</p>
                        <p>000000000</p>
                    </div>
                    <div className=' flex items-center space-x-2 lg:text-xs'>
                        <HiOutlineMail />
                        <p>demo@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar