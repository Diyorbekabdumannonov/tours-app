import { Context } from '@/pages/_app'
import React, { useContext, useState } from 'react'
import Tour from './Tour'
import Pagination from "react-js-pagination";

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
                    filteredTours?.slice((activePage === 1 ? 0 : ((activePage - 1) * 10)), (activePage * 10)).map(tour => {
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
                        : tours.slice((activePage === 1 ? 0 : ((activePage - 1) * 10)), (activePage * 10)).map(tour => {
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
            <div className='sticky w-full bottom-0 z-20 mt-20 flex items-center justify-center py-2 text-white bg-sky-950'>
                <Pagination
                    innerClass='flex items-center gap-4'
                    activePage={activePage}
                    itemsCountPerPage={12}
                    totalItemsCount={tours?.length}
                    pageRangeDisplayed={5}
                    itemClass="bg-white text-sky-950 w-8 h-8 flex items-center justify-center rounded-md text-xl font-bold"
                    onChange={e => handlePageChange(e)}
                />
            </div>
        </div>
    )
}
