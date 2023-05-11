import React from 'react'

export default function Filter() {
    return (
        <div className="flex flex-col w-72 z-50 p-4 fixed top-0 left-0 bg-white">
            <div>
                <label
                    htmlFor="title"
                    className='text-xl font-medium'>
                    Search Tours
                </label>
                <input
                    type="text"
                    id='title'
                    name="title"
                    placeholder="Search “Thailand, Asia”"
                    className="input"
                />
            </div>
            <div className='mt-4'>
                <label
                    htmlFor="price"
                    className='text-xl font-medium'>
                    Price
                </label>
                <div className="shadow-sm relative mt-4">
                    <span className="absolute top-1/12 left-0.5">💲 </span>
                    <input
                        type="text"
                        className="input -mt-4 px-5"
                        id='price'
                        placeholder='00'
                        name="price" />
                    <span className="text-gray-500 sm:text-sm absolute right-2 top-1">USD</span>
                </div>
            </div>
            <div className='mt-4'>
                <label
                    htmlFor="season"
                    className='text-xl font-medium'>
                    Season
                </label>
                <input
                    type="text"
                    className="input"
                    id='season'
                    name="season" />
            </div>
            <div className='mt-4'>
                <label
                    htmlFor="duration"
                    className='text-xl font-medium'>
                    Duration
                </label>
                <input
                    type="text"
                    placeholder="8 Days"
                    className="input"
                    id='duration'
                    name="duration" />
            </div>
        </div>
    )
}