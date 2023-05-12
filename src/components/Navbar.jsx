import { useEffect, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SearchBar from './SearchBar';
import a from './../assets/1.jpg'
import b from './../assets/2.jpg'
import c from './../assets/3.jpg'
import d from './../assets/4.jpg'
import Image from 'next/image';

const navigation = [
  { name: 'Product', href: '/' },
  { name: 'Features', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'Company', href: '/' },
]

export default function Navbar() {
  const swiper = useRef()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setInterval(() => {
      swiper?.current?.swiper?.slideNext()
    }, 8000)
  }, [])

  return (
    <>
      <nav className='relative z-50 text-white'>
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-1440 mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className='flex items-center gap-4 mb-6 text-2xl font-bold'>
              <img
                className="h-12 w-auto"
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'}
                alt="logo"
              />
              <span>Logo</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
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
      </nav>
      <div className="relative -mt-32 overflow-hidden w-screen">
        <Swiper
          direction='horizontal'
          loop
          ref={swiper}
          slidesPerView={1}
          className="w-screen h-screen relative"
        >
          {[a, b, c, d].map((index, i) => {
            return <SwiperSlide key={i}
              className="relative w-full h-full"
              data-swiper-autoplay="20"
            >
              <Image
                src={index}
                alt=""
                className="w-screen h-screen object-cover"
              />

            </SwiperSlide>
          })}
        </Swiper>
        <SearchBar />
      </div>
    </>
  )
}