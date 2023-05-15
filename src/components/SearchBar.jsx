import React, { useContext, useEffect, useRef, useState } from 'react'
import { MdMyLocation } from 'react-icons/md'
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { Field, Formik, Form, useFormik } from 'formik'
import { useRouter } from 'next/router';
import { Context } from '@/pages/_app';

export default function SearchBar() {
    const { setFilteredTours, TOURS } = useContext(Context)
    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')

    const router = useRouter();
    const formik = useRef()

    const initialValues = {
        searchTxt: '',
        duration: '',
        season: '',
        price: ''
    }
    const onSubmit = (values, submitProps) => {
        router.push('/explore')
        submitProps.setSubmitting(false)
        submitProps.resetForm()
    }

    const handleChange = (setState, elem) => {
        setState(elem.target.value)
    }

    const handleKeyUp = () => {
        let filteredTours = []
        filteredTours = TOURS?.filter(el => el.title.toLowerCase().includes(name.toLowerCase()))
        filteredTours = filteredTours?.filter(el => el.price.toLowerCase().includes(price.toLowerCase()))
        filteredTours = filteredTours?.filter(el => el.duration.toLowerCase().includes(duration.toLowerCase()))
        filteredTours = filteredTours?.filter(el => el.desc.toLowerCase().includes(desc.toLowerCase()))
        setFilteredTours(filteredTours)
    }

    return (
        <div className="h-full w-full flex z-10 absolute top-0 justify-center items-end">
            <div className="py-20 w-full">
                <div className='bg-white rounded-xl lg:p-10 p-4 lg:max-w-6xl lg:mx-auto mx-4'>
                    <h1 className='lg:text-3xl text-2xl font-semibold'>Latest reviews. Lowest prices.</h1>
                    <p className='lg:mt-4 mt-2 text-xs lg:text-base text-[#2C2C2C]'>compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.</p>
                    <Formik
                        innerRef={formik}
                        initialValues={initialValues}
                        onSubmit={onSubmit}>
                        <Form className='flex items-center mt-4 border border-black rounded-full py-1 bg-gray-50'>
                            <div className="relative">
                                <MdMyLocation className="h-5 w-5 absolute left-2 top-1.5 text-sky-950" />
                                <input
                                    type="text"
                                    className="block w-full rounded-l-full py-1 pl-10 text-sky-950  placeholder:text-sky-950 font-semibold sm:text-sm sm:leading-6 outline-none bg-gray-50"
                                    placeholder="Search “Thailand, Asia”"
                                    name="searchTxt"
                                    id="searchTxt"
                                    onChange={e => handleChange(setName, e)}
                                    onKeyUp={handleKeyUp} />
                            </div>
                            <hr className='w-px h-4 bg-sky-950' />
                            <div className="relative">
                                <BsFillCalendarDayFill className="h-5 w-5 text-sky-950 absolute top-1.5 left-2" />
                                <div className="flex items-center justify-between bg-gray-50">
                                    <input
                                        className="block py-1 pl-10 text-sky-950 md:!w-32 w-24 placeholder:text-sky-950 font-semibold sm:text-sm sm:leading-6 outline-none bg-gray-50"
                                        placeholder="8 Days"
                                        name="duration"
                                        id="duration"
                                        onChange={e => handleChange(setDuration, e)}
                                        onKeyUp={handleKeyUp} />
                                    <span>-</span>
                                    <input
                                        className="block py-1 lg:pl-10 pl-4 w-32 lg:w-auto text-sky-950 placeholder:text-sky-950 font-semibold sm:text-sm sm:leading-6 outline-none bg-gray-50"
                                        placeholder="Description"
                                        name="season"
                                        id="season"
                                        onChange={e => handleChange(setDesc, e)}
                                        onKeyUp={handleKeyUp} />
                                </div>
                            </div>
                            <hr className='w-px h-4 bg-sky-950' />
                            <div className="relative">
                                <span className="absolute top-1 left-2">💲 </span>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block w-full bg-gray-50 outline-none py-1 pl-7 pr-12 text-sky-950 font-semibold placeholder:text-sky-950 sm:text-sm sm:leading-6"
                                    placeholder="0.00"
                                    aria-describedby="price-currency"
                                    onChange={e => handleChange(setPrice, e)}
                                    onKeyUp={handleKeyUp} />
                                <span className="text-gray-500 sm:text-sm absolute right-2 top-2">USD</span>
                            </div>
                            <button className='w-72 py-2 -my-1 bg-green-600 text-white font-bold text-xl rounded-r-full'>Find Tours</button>
                        </Form>
                    </Formik>
                </div>
            </div >
        </div>
    )
}