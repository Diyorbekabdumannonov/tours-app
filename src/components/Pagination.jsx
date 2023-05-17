import { Context } from '@/pages/_app'
import React, { useContext, useState } from 'react'
import Tour from './Tour'

export default function Pagenation({ tours }) {
    const { filteredTours } = useContext(Context)
    const [activePage, setActivePage] = useState(1)
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    }

    return (
        <div className='relative'>
            <div className="grid grid-cols-4 gap-6 px-6 mt-10 max-w-1440 mx-auto">
                {filteredTours?.length ?
                    filteredTours?.slice(0, activePage * 12).map(tour => {
                        return <Tour
                            key={tour.title}
                            title={tour.title}
                            imgSrc={tour.image}
                            href={tour.link}
                            desc={tour.desc}
                            price={tour.price}
                        />
                    })
                    : filteredTours === 'noData'
                        ?
                        <h1 className='text-center font-semibold text-2xl'>No Data Found :(</h1>
                        : tours.slice(0, activePage * 12).map(tour => {
                            return <Tour
                                key={tour.title}
                                title={tour.title}
                                imgSrc={tour.image}
                                href={tour.link}
                                desc={tour.desc}
                                price={tour.price}
                            />
                        })}
            </div>
            <div className='z-20 my-20 flex items-center justify-center pb-4 text-white'>
                <button className='px-8 bg-[#111827] rounded-md py-2.5' onClick={() => handlePageChange(activePage + 1)}>
                    Load More
                </button>
            </div>
        </div>
    )
}
