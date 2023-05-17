import React from 'react'

export default function Tour({ imgSrc, href, title, desc, price }) {
  return (
    <div className="relative rounded-xl flex flex-col gap-2 justify-between border hover:border-none hover:shadow-2xl tour">
      <div>
        <div className="h-48 w-full overflow-hidden rounded-md rounded-b-none bg-gray-200 group-hover:opacity-75">
          <img
            src={'https://www.advantour.com' + imgSrc}
            alt={imgSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <h3 className="text-base mt-4 mx-2 font-bold text-gray-700">
          {title}
        </h3>
        <p className="mt-1 text-sm mx-2 text-gray-600 font-normal">{desc}...</p>
      </div>
      <p className="text font-normal text-red-900 mx-2 mt-2 mb-4 whitespace-nowrap overflow-hidden">{price}/Day - Free Cancellation</p>
      <div className='w-full px-6 pb-2 absolute bottom-0 bg-white items-center justify-end readMore hidden rounded-b-xl'>
        <a href={'https://www.advantour.com' + href} className="bg-white py-1.5 gap-4 border-t text-[#0097c2] font-bold w-full text-center flex items-center justify-center">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span> View Details</span>
        </a>
      </div>
    </div >
  )
}
