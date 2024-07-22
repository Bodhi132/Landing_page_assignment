"use client";
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const ProjectCarouselMobile = () => {

    const ProjectsData = [
        {
            name: 'Project 1',
            Industry: 'Real Estate',
            description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels',
            image: '/project-imng.png',
            icon: ''
        },
        {
            name: 'Project 2',
            Industry: 'Social Media',
            description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels',
            image: '/project-imng.png',
            icon: ''
        },
        {
            name: 'Project 3',
            Industry: 'Banking',
            description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels',
            image: '/project-imng.png',
            icon: ''
        },
        {
            name: 'Project 4',
            Industry: 'Education',
            description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels',
            image: '/project-imng.png',
            icon: ''
        }
    ]
    return (
        <>
         <h1 className={`${inter.className} font-bold text-[2rem] mt-[3.5rem]`}>Projects we are proud of</h1>
         <h2 className=' font-medium my-[1rem]'>Our software development company is truly proud of the wonderful clients we have <br /> worked with. We enjoy a long-term partnership</h2>
        <Carousel className="w-full py-16 lg:hidden">
            <CarouselContent>
                {ProjectsData.map((data, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className='w-full'>
                                <CardContent className="flex items-center justify-center p-6">
                                    <div className=''>
                                        <div className=' w-full'>
                                            <h1 className='font-bold text-[2.3rem]'>{data.name}</h1>
                                            <p className=' font-semibold text-sm my-[2rem]'>{data.description}</p>
                                            <p className=' text-sm'>Business analysis / iOS / Android/ QA/ UI/UX Design</p>
                                        </div>
                                        <div className=' h-full'>
                                            <img src='/ProjectImg/project-img.png' alt='project' className=' h-full' />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </>
    )
}

export default ProjectCarouselMobile