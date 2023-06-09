import { useContext, useEffect, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import 'swiper/css'
import { MdOutlineSearch } from 'react-icons/md';
import { Context } from '@/pages/_app';
import logo from './../assets/logo.png'
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { TOURS, setFilteredTours } = useContext(Context)
  const [navbar, setNavbar] = useState(false)

  const navigation = [
    { name: 'Explore', href: '/explore' },
    { name: 'Features', href: '/' },
    { name: 'Marketplace', href: '/' },
    { name: 'Blog', href: '/' },
  ]

  const handleChange = (e) => {
    const filteredData = TOURS?.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredTours(filteredData)
  }

  const changeBackground = () => {
    if (window.scrollY > 72) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
      <nav className={'z-50 sticky top-0 ' + (navbar ? 'bg-white text-black shadow-md' : 'text-white bg-transparent')}>
        <nav className="flex items-center justify-between p-6 py-2 lg:px-8 max-w-1440 mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className='flex items-center bg-white gap-4 rounded-xl p-1'>
              <Image
                className="h-12 w-auto"
                src={logo}
                alt="logo"
              />
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
            <div className='bg-white text-sky-950 shadow-xl flex items-center py-2 px-4 rounded-full'>
              <input
                type="text"
                placeholder='Quick Search'
                className='bg-transparent text-sky-950 placeholder:text-sky-950 font-semibold outline-none'
                onChange={e => handleChange(e)}
              />
              <MdOutlineSearch />
            </div>
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
                <div></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </>
  )
}