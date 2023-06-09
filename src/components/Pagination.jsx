import { Context } from '@/pages/_app'
import React, { useContext, useEffect, useState } from 'react'
import Tour from './Tour'

export default function Pagenation({ tours }) {
    const { filteredTours, activePage, setActivePage } = useContext(Context)
    const [maxPage, setMaxPage] = useState(5)
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    }
    useEffect(() => {
        if ((filteredTours?.length / 12).toString().slice(2) != 0) {
            setMaxPage(Math.floor((filteredTours?.length / 12)) + 1)
        }
        if (filteredTours?.length) {
            setActivePage(1)
        }
        console.log(maxPage, activePage)
    }, [filteredTours])
    return (
        <div className='relative'>
            {filteredTours?.length ?
                <>
                    <div className="grid grid-cols-4 gap-6 px-6 mt-10 max-w-1440 mx-auto">
                        {filteredTours?.slice(0, activePage * 12).map(tour => {
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
                    {
                        (activePage !== maxPage) ?
                            <div className='z-20 my-20 flex items-center justify-center pb-4 text-white'>
                                <button className='px-8 bg-[#111827] rounded-md py-2.5' onClick={() => handlePageChange(activePage + 1)}>
                                    Load More
                                </button>
                            </div> : ''
                    }
                </>
                : filteredTours?.length === 0
                    ?
                    <h1 className='text-center font-semibold text-2xl'>No Data Found :(</h1>
                    : <>
                        <div className="grid grid-cols-4 gap-6 px-6 mt-10 max-w-1440 mx-auto">
                            {tours.slice(0, activePage * 12).map(tour => {
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
                        {
                            (activePage !== Math.round((tours.length / 12))) ? <div className='z-20 my-20 flex items-center justify-center pb-4 text-white'>
                                <button className='px-8 bg-[#111827] rounded-md py-2.5' onClick={() => handlePageChange(activePage + 1)}>
                                    Load More
                                </button>
                            </div> : ''
                        }
                    </>
            }
        </div >
    )
}
