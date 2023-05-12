import React from 'react'

export default function Tour({ imgSrc, href, title, desc, price }) {
  return (
    <div className="group relative">
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={'https://www.advantour.com' + imgSrc}
          alt={imgSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className='h-40 overflow-hidden'>
          <h3 className="text-base font-bold text-gray-700">
            {title}
          </h3>
          <p className="mt-1 text-sm">{desc}</p>
        </div>
        <p className="text-sm font-medium text-gray-900 w-96">{price}</p>
      </div>
      <div className='mt-4 w-full px-6'>
        <a href={'https://www.advantour.com' + href} className="bg-green-500 rounded-full text-white font-bold block w-full text-center py-1.5">
         Read More
        </a>
      </div>
    </div>
  )
}
