import React, { useContext } from 'react'
import { MdMyLocation } from 'react-icons/md'
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { Field, Formik, Form } from 'formik'
import { useRouter } from 'next/router';
import { Context } from '@/pages/_app';

export default function SearchBar() {
    const { setParams, setFilteredTours, filteredTours, TOURS, params } = useContext(Context)
    const router = useRouter();

    const initialValues = {
        searchTxt: '',
        duration: '',
        season: '',
        price: ''
    }
    const onSubmit = (values, submitProps) => {
        setParams(values)
        router.push('/explore')
        submitProps.setSubmitting(false)
        submitProps.resetForm()
    }

    const filterByName = (el) => {
        const tours = TOURS.filter(e => e.title.toLowerCase().includes(el.target.value.toLowerCase()))
        setFilteredTours(tours)
    }

    const filterByDuration = (el) => {
        const tours = filteredTours.filter(e => e.duration.toLowerCase().includes(el.target.value.toLowerCase()))
        setFilteredTours(tours)
    }

    return (
        <div className="h-full w-full flex z-10 absolute top-0 justify-center items-end">
            <div className="px-6 lg:px-8 py-20">
                <div className='bg-white rounded-xl p-10 max-w-6xl mx-auto'>
                    <h1 className='text-3xl font-semibold'>Latest reviews. Lowest prices.</h1>
                    <p className='mt-4 text-[#2C2C2C]'>compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.</p>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}>
                        <Form className='flex items-center mt-4'>
                            <div className="shadow-sm relative">
                                <MdMyLocation className="h-5 w-5 absolute left-2 top-2 text-gray-400" />
                                <input
                                    type="text"
                                    className="block w-full rounded-l-md py-1.5 pl-10 text-gray-800  placeholder:text-gray-800 font-semibold sm:text-sm sm:leading-6 outline-none bg-orange-100"
                                    placeholder="Search “Thailand, Asia”"
                                    name="searchTxt"
                                    id="searchTxt"
                                    onChange={filterByName} />
                            </div>
                            <div className="shadow-sm relative">
                                <BsFillCalendarDayFill className="h-5 w-5 text-gray-400 absolute top-2 left-2" />
                                <div className="flex items-center justify-between bg-orange-100">
                                    <input
                                        className="block py-1.5 pl-10 text-gray-800 !w-32 placeholder:text-gray-800 font-semibold sm:text-sm sm:leading-6 outline-none border-l border-l-black bg-orange-100"
                                        placeholder="8 Days"
                                        name="duration"
                                        id="duration"
                                        onChange={filterByDuration} />
                                    <span>-</span>
                                    <Field
                                        className="block py-1.5 pl-10 text-gray-800 placeholder:text-gray-800 font-semibold sm:text-sm sm:leading-6 outline-none bg-orange-100"
                                        placeholder="Description"
                                        name="season"
                                        id="season"
                                    />
                                </div>
                            </div>
                            <div className="shadow-sm relative">
                                <span className="absolute top-1.5 left-2">💲 </span>
                                <Field
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block w-full border-l border-l-black bg-orange-100 outline-none py-1.5 pl-7 pr-12 text-gray-800 font-semibold placeholder:text-gray-800 sm:text-sm sm:leading-6"
                                    placeholder="0.00"
                                    aria-describedby="price-currency"
                                />
                                <span className="text-gray-500 sm:text-sm absolute right-2 top-2">USD</span>
                            </div>
                            <button className='w-64 py-1 bg-green-600 text-white font-bold text-xl rounded-r-md'>Find Tours</button>
                        </Form>
                    </Formik>
                </div>
            </div >
        </div>
    )
}