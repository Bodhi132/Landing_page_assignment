import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const DevelopmentPhase = () => {

    const phases = [
        {
            name: 'Analysis',
            desc: 'We craft precise technical specs, aligning with your business, technology, and user requirements.',
            icon: '/Dev-stages-img/planing.svg'
        },
        {
            name: 'Design',
            desc: 'We adapt the customer\'s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.',
            icon: '/Dev-stages-img/graphic-design.svg'
        },
        {
            name: 'Development',
            desc: 'We create an extensible architecture, write clean and stable code. We integrate with customer technologies.',
            icon: '/Dev-stages-img/coding-language.svg'
        },
        {
            name: 'Testing',
            desc: 'We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.',
            icon: '/Dev-stages-img/security.svg'
        },
        {
            name: 'Launching',
            desc: 'We design the application page and publish it in the App Store and Google Play stores.',
            icon: '/Dev-stages-img/hosting.svg'
        },
        {
            name: 'Support',
            desc: 'We monitor the stability of the application, update it for new devices and versions of iOS and Android.',
            icon: '/Dev-stages-img/application.svg'
        },
    ]

    return (
        <div className='md:flex-row flex flex-col justify-center max-md:items-center my-16 gap-4'>
            <div className=' space-y-5'>
                {
                    phases.slice(0, 3).map((phase, index) => {
                        return (
                            <Card key={index} className='flex xl:w-[24.5rem] lg:w-[18rem] md:w-[14rem]'>
                                <div>
                                    <CardHeader className='flex items-center space-x-5'>
                                        <img src={phase.icon} alt={phase.name} className='h-8 w-8 block' />
                                        <CardTitle>{phase.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{phase.desc}</CardDescription>
                                    </CardContent>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
            <div>
                <img src='/mobile.png' alt='Development' className='block' />
            </div>
            <div className=' space-y-5'>
                {
                    phases.slice(3, 6).map((phase, index) => {
                        return (
                            <Card key={index} className='flex xl:w-[24.5rem] lg:w-[18rem] md:w-[14rem]'>
                                <div>
                                    <CardHeader className='flex items-center space-x-5'>
                                        <img src={phase.icon} alt={phase.name} className='h-8 w-8 block' />
                                        <CardTitle>{phase.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{phase.desc}</CardDescription>
                                    </CardContent>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DevelopmentPhase