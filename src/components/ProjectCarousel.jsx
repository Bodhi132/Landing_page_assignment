"use client"
import React from 'react'
import { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const ProjectCarousel = () => {


    const [SelectedProjects, setSelectedProjects] = useState(0)

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
        <div className=' mt-[3rem] py-[1rem] hidden lg:block'>
            <h1 className={`${inter.className} font-bold text-[2.3rem]`}>Projects we are proud of</h1>
            <h2 className=' font-medium my-[1.4rem]'>Our software development company is truly proud of the wonderful clients we have <br /> worked with. We enjoy a long-term partnership</h2>
            <div className=' flex space-x-[2.5rem] my-[3rem]'>
                {ProjectsData.map((data, ind) => {
                    return (
                        <p onClick={() => setSelectedProjects(ind)} className={`cursor-pointer ${ind === SelectedProjects ? 'font-bold' : 'font-normal'}`}>{data.name}</p>
                    )
                })
                }
            </div>
            <div>
                {
                    ProjectsData.map((data, index) => {
                        return (
                            index === SelectedProjects &&
                            <div className=' flex'>
                                <div className='w-[60%]'>
                                    <h1 className='font-bold text-[2.3rem]'>{data.name}</h1>
                                    <p className=' font-semibold text-sm my-[2rem]'>{data.description}</p>
                                    <p className=' text-sm'>Business analysis / iOS / Android/ QA/ UI/UX Design</p>
                                    <div className=' flex space-x-5 my-[2rem]'>
                                        <div className='flex'>
                                            <img src="/ProjectImg/location.png" alt='location' className='block' />
                                            <p>India</p>
                                        </div>
                                        <div className='flex'>
                                            <img src='/ProjectImg/work.png' alt='work' className=' block' />
                                            <p>{data.Industry}</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-9'>
                                        <div>
                                            <h1 className={`${inter.className} font-bold `}>400%</h1>
                                            <p className=' text-xs text-[#667085]'>User Growth</p>
                                        </div>
                                        <div >
                                            <h1 className={`${inter.className} font-bold `}>+ 200 000</h1>
                                            <p className=' text-xs text-[#667085]'>Active Users</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-6 mt-[1rem]'>
                                        <img src="/ProjectImg/ios.png" alt="" srcset="" className='block cursor-pointer' />
                                        <img src="/ProjectImg/android.png" alt="" srcset="" className='block cursor-pointer' />
                                    </div>
                                </div>
                                <div className=' h-full'>
                                    <img src='/ProjectImg/project-img.png' alt='project' className=' h-full' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectCarousel