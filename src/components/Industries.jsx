import React from 'react'

const Industries = () => {

    const industriesData = [
        {
            name:'Social Media',
            url:'/Industries-Images/narrative_active_outline.png'
        },
        {
            name:'Education',
            url:'/Industries-Images/education_outline.png'
        },
        {
            name:'AR technology',
            url:'/Industries-Images/live_outline.png'
        },
        {
            name:'Fitness and sport',
            url:'/Industries-Images/ball_outline.png'
        },
        {
            name:'Auto, transport',
            url:'/Industries-Images/car_outline.png'
        },
        {
            name:'TV series',
            url:'/Industries-Images/video_outline.png'
        },
        {
            name:'Bank',
            url:'/Industries-Images/bank_outline.png'
        },
        {
            name:'Medicine, health',
            url:'/Industries-Images/health_outline.png'
        },
        {
            name:'Startups',
            url:'/Industries-Images/work_outline.png'
        },
        {
            name:'Construction',
            url:'/Industries-Images/employee_outline.png'
        },
        {
            name:'Restaurants, food delivery',
            url:'/Industries-Images/bowl_sticks.png'
        },
        {
            name:'Religion',
            url:'/Industries-Images/magic_wand.png'
        },
        {
            name:'Game projects',
            url:'/Industries-Images/game.png'
        },
        {
            name:'Marketplaces',
            url:'/Industries-Images/market.png'
        },
        {
            name:'Online cources',
            url:'/Industries-Images/video_circle.png'
        },
    ]


  return (
    <div className=' grid md:grid-rows-5 md:grid-flow-col grid-cols-none grid-flow-row gap-5'>
        {
            industriesData.map((item,ind)=>{
                return (
                    <div key={ind} className='flex items-center space-x-3'>
                        <div className=' h-11 w-11 rounded-full bg-white shadow-xl flex justify-center items-center'>
                            <img src={item.url} alt="" srcset="" className=' block' />
                        </div>
                        <h1 className=' font-semibold'>{item.name}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Industries