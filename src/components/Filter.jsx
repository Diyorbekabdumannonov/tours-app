import { Context } from '@/pages/_app'
import { Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { BsClock } from 'react-icons/bs'
import { MdMyLocation } from 'react-icons/md'

export default function Filter({ params }) {
    const { filteredTours, TOURS, setFilteredTours, activePage } = useContext(Context)
    const { loading, setLoading } = params

    const initialValues = {
        searchTxt: '',
        duration: '',
        desc: '',
        price: '',
        price2: ''
    }
    const onSubmit = (values, submitProps) => {
        setLoading(true)
        let tours = TOURS
        if (values.searchTxt) {
            tours = tours.filter(el => el.title.toLowerCase().includes(values.searchTxt.toLowerCase()))
        }
        if (values.price) {
            tours = tours.filter(el => el.price.slice(4).replace(',', '') > parseInt(values.price))
        }
        if (values.priceTo) {
            tours = tours.filter(el => el.price.slice(4).replace(',', '') < parseInt(values.price2))
        }
        if (values.duration) {
            tours = tours.filter(el => el.duration.includes(values.duration))
        }
        if (values.desc) {
            tours = tours.filter(el => el.desc.toLowerCase().includes(values.desc.toLowerCase()))
        }
        setTimeout(() => {
            setFilteredTours(tours)
            setLoading(false)
        }, 1000)
        submitProps.setSubmitting(false)
    }
    console.log(filteredTours)
    return (
        <div className='sticky top-0 left-0 h-fit w-full flex items-center justify-center'>
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}>
                <Form>
                    <div className="flex flex-col w-72 z-50 p-4">
                        <h1 className='font-normal text-gray-900 mb-4 text-sm'>Showing {filteredTours ? filteredTours?.length : TOURS?.length} tours</h1>
                        <div>
                            <label
                                htmlFor="searchTxt"
                                className='text-xl font-medium'>
                                Search Tours
                            </label>
                            <div className='relative flex items-center'>
                                <MdMyLocation className="h-5 w-5 text-sky-950 absolute left-2 bg-[#f7f7f7] top-6" />
                                <Field
                                    id='searchTxt'
                                    name="searchTxt"
                                    placeholder="Search “Thailand, Asia”"
                                    className="input pl-8" />
                            </div>
                        </div>
                        <label
                            className='text-xl font-medium mt-4'>
                            Price
                        </label>
                        <div className="relative flex items-center input justify-between">
                            <div className='flex items-center w-32 overflow-hidden'>
                                <label htmlFor="price" className='mb-0.5 mr-2'>from</label>
                                <Field
                                    name="price"
                                    id="price"
                                    className="border-none outline-none w-full bg-transparent"
                                    placeholder="0.00" />
                            </div>
                            <span className='mr-4'>💲 </span>
                            <div className='flex items-center w-32 overflow-hidden'>
                                <label htmlFor="price2" className='mb-0.5 mr-2'>to</label>
                                <Field
                                    name="price2"
                                    id="price2"
                                    className="border-none outline-none w-full bg-transparent"
                                    placeholder="0.00" />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label
                                htmlFor="desc"
                                className='text-xl font-medium'>
                                Description
                            </label>
                            <Field
                                className="input"
                                id='desc'
                                name="desc"
                                placeholder='Description' />
                        </div>
                        <div className='mt-4'>
                            <label
                                htmlFor="duration"
                                className='text-xl font-medium'>
                                Duration
                            </label>
                            <div className='relative flex items-center'>
                                <BsClock className="text-sky-950 absolute left-2 bg-[#f7f7f7] top-7" />
                                <Field
                                    placeholder="8 Days"
                                    className="input pl-8"
                                    id='duration'
                                    name="duration" />
                            </div>
                        </div>
                        <button className='w-full mt-6 mx-auto bg-[#008489] text-white font-medium py-2 rounded' type='submit'>Filter</button>
                    </div>
                </Form>
            </Formik>
        </div >
    )
}