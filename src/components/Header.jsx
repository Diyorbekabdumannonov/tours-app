import React, { useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SearchBar from './SearchBar';
import a from './../assets/1.jpg'
import b from './../assets/2.jpg'
import c from './../assets/3.jpg'
import d from './../assets/4.jpg'
import Image from 'next/image';

export default function Header() {
    const swiper = useRef()

    useEffect(() => {
        setInterval(() => {
            swiper?.current?.swiper?.slideNext()
        }, 12000)
    }, [])

    return (
        <div className="relative -mt-[105px] overflow-hidden w-screen">
            <Swiper
                direction='horizontal'
                loop
                ref={swiper}
                slidesPerView={1}
                className="w-screen h-screen relative">
                {[a, b, c, d].map((index, i) => {
                    return <SwiperSlide key={i}
                        className="relative w-full h-full"
                        data-swiper-autoplay="90">
                        <Image
                            src={index}
                            alt=""
                            className="w-screen h-screen object-cover" />

                    </SwiperSlide>
                })}
            </Swiper>
            <SearchBar />
        </div>
    )
}