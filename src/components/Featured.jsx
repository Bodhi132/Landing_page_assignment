import React from 'react'

const Featured = () => {

    const featuredData = [
        {
            id: 1,
            title: 'Angel List',
            link:'/angellist.png'
        },
        {
            id: 2,
            title: 'Crunch Base',
            link:'/cb.png'
        },
        {
            id: 3,
            title: 'Glassdoor',
            link:'/gd.png'
        },
        {
            id: 4,
            title: 'Product Hunt',
            link:'/product-hunt.png'
        },
        {
            id: 5,
            title: 'Y Combinator',
            link:'/y_comb.png'
        },
        {
            id: 6,
            title: 'Forbes',
            link:'/forbes.png'
        }
    ]

  return (
    <div className='flex flex-wrap px-2 md:px-18 lg:px-36 py-16 max-md:justify-center gap-5'>
        {
            featuredData.map((data) => (
                <div key={data.id} className="flex flex-col items-center justify-center mx-auto space-y-4 max-md:w-[8rem]">
                    <img src={data.link} alt={data.title} className="md:h-20 md:w-20 h-12 w-12" />
                    <p className=' font-semibold'>{data.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Featured