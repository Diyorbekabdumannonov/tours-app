import React from 'react'

export default function Tour({ imgSrc, href, title, desc, price }) {
  return (
    <div className="relative shadow-xl rounded-md flex flex-col gap-2 justify-between">
      <div>
        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={'https://www.advantour.com' + imgSrc}
            alt={imgSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <h3 className="text-base mt-4 mx-2 font-bold text-gray-700">
          {title}
        </h3>
        <p className="text-sm font-bold text-red-900 ml-2 mt-2">{price}</p>
        <p className="mt-1 text-sm mx-2">{desc.slice(0, 100)}...</p>
      </div>
      <div className='w-full px-6 pb-2 flex items-center justify-end'>
        <a href={'https://www.advantour.com' + href} className="bg-green-500 rounded-full text-white font-bold block w-full text-center py-1.5">
          Read More
        </a>
      </div>
    </div >
  )
}
