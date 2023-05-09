import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdMyLocation } from 'react-icons/md'
import { BsFillCalendarDayFill } from 'react-icons/bs'

const navigation = [
  { name: 'Product', href: '/' },
  { name: 'Features', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'Company', href: '/' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className='relative z-50 text-white'>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative -mt-20">
        <Swiper
          direction='horizontal'
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          slidesPerView={1}
          className="w-full h-full relative"
        >
          {[1, 2, 3, 4].map(e => {
            return <SwiperSlide key={e}
              className="relative w-full h-full"
              data-swiper-autoplay="20"
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="object-cover"
              />

            </SwiperSlide>
          })}
        </Swiper>
        <div className="px-6 lg:px-8 py-20 z-10 absolute h-auto w-full top-1/2">
          <div className='bg-white rounded-xl p-10 max-w-6xl mx-auto'>
            <h1 className='text-3xl font-semibold'>Latest reviews. Lowest prices.</h1>
            <p className='mt-4 text-[#2C2C2C]'>compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.</p>
            <div className='flex items-center'>
              <div className="relative mt-2 shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdMyLocation className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  className="block w-full rounded-l-md py-1.5 pl-10 text-gray-800  placeholder:text-gray-800 font-semibold sm:text-sm sm:leading-6 outline-none bg-orange-100"
                  placeholder="Search “Thailand, Asia”"
                />
              </div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <BsFillCalendarDayFill className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <div className="flex items-center justify-between bg-orange-100">
                  <input
                    className="block py-1.5 pl-10 text-gray-800 !w-32 placeholder:text-gray-800 font-semibold sm:text-sm sm:leading-6 outline-none border-l border-l-black bg-orange-100"
                    placeholder="8 Days"
                  />
                  <span>-</span>
                  <input
                    className="block py-1.5 pl-10 text-gray-800 placeholder:text-gray-800 font-semibold sm:text-sm sm:leading-6 outline-none bg-orange-100"
                    placeholder="Spring, summer, autumn"
                  />
                </div>
              </div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">💲 </span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full border-l border-l-black bg-orange-100 outline-none py-1.5 pl-7 pr-12 text-gray-800 font-semibold placeholder:text-gray-800 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  aria-describedby="price-currency"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm" id="price-currency">
                    USD
                  </span>
                </div>
              </div>
              <button className='w-64 py-1 mt-2 bg-green-600 text-white font-bold text-xl'>Find Tours</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
