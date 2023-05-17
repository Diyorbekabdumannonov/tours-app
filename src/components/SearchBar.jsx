import React, { useContext, useEffect, useRef, useState } from 'react'
import { MdMyLocation } from 'react-icons/md'
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { Field, Formik, Form, useFormik } from 'formik'
import { Context } from '@/pages/_app';

export default function SearchBar() {
    const { setFilteredTours, TOURS } = useContext(Context)
    const formik = useRef()

    const initialValues = {
        searchTxt: '',
        duration: '',
        season: '',
        price: '',
        priceTo: '',
        desc: ''
    }
    const onSubmit = (values, submitProps) => {
        console.log(values)
        let filteredTours = [];
        filteredTours = TOURS?.filter(el => el.title.toLowerCase().includes(values.searchTxt.toLowerCase()))
        if (values.duration) {
            filteredTours = filteredTours?.filter(el => el.duration.includes(values.duration))
        }
        if (values.price) {
            filteredTours = filteredTours?.filter(el => el.price.slice(4).replace(',', '') > parseInt(values.price))
        }
        if (values.priceTo) {

            filteredTours = filteredTours?.filter(el => el.price.slice(4).replace(',', '') < parseInt(values.priceTo))
        }
        if (values.season) {
            filteredTours = filteredTours?.filter(el => el.desc.toLowerCase().includes(values.season.toLowerCase()))
        }
        console.log(filteredTours)
        setFilteredTours(filteredTours)
        submitProps.setSubmitting(false)
        submitProps.resetForm()
    }
    return (
        <div className="h-full w-full flex z-10 absolute top-0 justify-center items-end">
            <div className="py-20 w-full">
                <div className='bg-white rounded-xl lg:p-10 p-7 lg:max-w-6xl lg:mx-auto mx-4'>
                    <h1 className='lg:text-3xl text-2xl font-bold text-[#2c2c2c]'>Latest reviews. Lowest prices.</h1>
                    <p className='lg:mt-4 mt-1.5 text-xs lg:text-base text-[#2C2C2C]'>compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.</p>
                    <Formik
                        innerRef={formik}
                        initialValues={initialValues}
                        onSubmit={onSubmit}>
                        <Form className='flex items-center justify-between mt-4 rounded bg-[#f7f7f7] h-14'>
                            <div className="relative ml-3">
                                <MdMyLocation className="h-5 w-5 absolute left-2 top-1.5 text-sky-950" />
                                <Field
                                    type="text"
                                    className="block w-full rounded-l-full py-1 pl-10 text-sky-950  placeholder:text-sky-950 font-semibold sm:text-sm sm:leading-6 outline-none bg-transparent      "
                                    placeholder="Search “Thailand, Asia”"
                                    name="searchTxt"
                                    id="searchTxt"
                                />
                            </div>
                            <hr className='w-px h-4 bg-sky-950' />
                            <div className="relative">
                                <BsFillCalendarDayFill className="h-5 w-5 text-sky-950 absolute top-1.5 left-2" />
                                <div className="flex items-center justify-between bg-transparent">
                                    <Field
                                        className="block py-1 pl-10 text-sky-950 md:!w-32 w-24 placeholder:text-sky-950 font-semibold sm:text-sm sm:leading-6 outline-none bg-transparent"
                                        placeholder="8 Days"
                                        name="duration"
                                        id="duration"
                                    />
                                    <span>-</span>
                                    <Field
                                        className="block py-1 lg:pl-10 pl-4 w-32 lg:w-auto text-sky-950 placeholder:text-sky-950 font-semibold sm:text-sm sm:leading-6 outline-none bg-transparent"
                                        placeholder="Description"
                                        name="season"
                                        id="season"
                                    />
                                </div>
                            </div>
                            <hr className='w-px h-4 bg-sky-950' />
                            <div className="relative flex items-center">
                                <span className="">💲 </span>
                                <div className='flex items-center w-32'>
                                    <label htmlFor="price" className='mb-0.5 mr-2'>from</label>
                                    <Field
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="block w-full bg-transparent outline-none p-1 text-sky-950 font-semibold placeholder:text-sky-950 sm:text-sm sm:leading-6"
                                        placeholder="0.00"
                                    />
                                </div>
                                <div className='flex items-center w-32'>
                                    <label htmlFor="price2" className='mb-0.5 mr-2'>to</label>
                                    <Field
                                        type="text"
                                        name="priceTo"
                                        id="priceTo"
                                        className="block w-full bg-transparent outline-none p-1 text-sky-950 font-semibold placeholder:text-sky-950 sm:text-sm sm:leading-6"
                                        placeholder="0.00"
                                    />
                                </div>
                                <span className="text-gray-500 sm:text-sm absolute right-2 top-2">USD</span>
                            </div>
                            <button className='w-44 h-full -my-1 bg-[#008489] text-white font-medium rounded-r'>Find Tours</button>
                        </Form>
                    </Formik>
                </div>
            </div >
        </div>
    )
}