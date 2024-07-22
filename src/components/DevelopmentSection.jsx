"use client"
import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaChevronRight } from "react-icons/fa6";

const DevelopmentSection = () => {

    const developmentData = [
        'iOS  development',
        'Android development',
        'Web development',
        'Ui/Ux design',
        'Testing',
        'Launch',
        'IT consulting',
    ]

    return (
        <div className=' overflow-scroll md:overflow-auto mt-8'>
            <NavigationMenu className='flex md:flex-col justify-start list-none h-full '>
                {developmentData.map((data, index) => (
                    <NavigationMenuItem key={index} style={{ width: '100%' }}>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {data} <FaChevronRight className=' ml-4 font-extralight text-[#80A948]'/>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenu>
        </div>
    )
}

export default DevelopmentSection