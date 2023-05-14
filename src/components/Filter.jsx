import { Context } from '@/pages/_app'
import { Formik } from 'formik'
import React, { useContext, useRef, useState } from 'react'

export default function Filter() {
    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')

    const formik = useRef()
    const { TOURS, setFilteredTours } = useContext(Context)

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
        filteredTours = filteredTours?.filter(el => el.season.toLowerCase().includes(desc.toLowerCase()))
        setFilteredTours(filteredTours)
    }
    return (
        <div className='sticky top-0 left-0 h-fit w-full flex items-center justify-center'>
            <Formik
                innerRef={formik}
                onSubmit={onSubmit}
                initialValues={initialValues}>
                <div className="flex flex-col w-72 z-50 p-4">
                    <div>
                        <label
                            htmlFor="title"
                            className='text-xl font-medium'>
                            Search Tours
                        </label>
                        <input
                            type="text"
                            id='title'
                            name="title"
                            placeholder="Search “Thailand, Asia”"
                            className="input"
                            onChange={e => handleChange(setName, e)}
                            onKeyUp={handleKeyUp}
                        />
                    </div>
                    <div className='mt-4'>
                        <label
                            htmlFor="price"
                            className='text-xl font-medium'>
                            Price
                        </label>
                        <div className="shadow-sm relative mt-4">
                            <span className="absolute top-1/12 left-0.5">💲 </span>
                            <input
                                type="text"
                                className="input -mt-4 px-5"
                                id='price'
                                placeholder='00'
                                name="price"
                                onChange={e => handleChange(setPrice, e)}
                                onKeyUp={handleKeyUp} />
                            <span className="text-gray-500 sm:text-sm absolute right-2 top-1">USD</span>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label
                            htmlFor="season"
                            className='text-xl font-medium'>
                            Season
                        </label>
                        <input
                            type="text"
                            className="input"
                            id='season'
                            name="season"
                            placeholder='Spring, Summer, Winter'
                            onChange={e => handleChange(setDesc, e)}
                            onKeyUp={handleKeyUp} />
                    </div>
                    <div className='mt-4'>
                        <label
                            htmlFor="duration"
                            className='text-xl font-medium'>
                            Duration
                        </label>
                        <input
                            type="text"
                            placeholder="8 Days"
                            className="input"
                            id='duration'
                            name="duration"
                            onChange={e => handleChange(setDuration, e)}
                            onKeyUp={handleKeyUp} />
                    </div>
                </div>
            </Formik>
        </div>
    )
}