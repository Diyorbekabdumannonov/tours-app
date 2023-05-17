import { Context } from '@/pages/_app'
import { Formik } from 'formik'
import React, { useContext, useRef, useState } from 'react'

export default function Filter() {
    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [toPrice, setToPrice] = useState('')

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
        let filteredTours = TOURS?.filter(el => el.title.toLocaleLowerCase().includes(name.toLowerCase()))
            .filter(el => el.price.slice(4).replace(',', '') > parseInt(price))
            .filter(el => el.price.slice(4).replace(',', '') < parseInt(toPrice))
            .filter(el => el.duration.toLowerCase().includes(duration.toLowerCase()))
            .filter(el => el.desc.toLowerCase().includes(desc.toLowerCase()))
        console.log(filteredTours, name.toLocaleLowerCase())
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
                    <label
                        className='text-xl font-medium mt-4'>
                        Price
                    </label>
                    <div className="relative flex items-center input">
                        <div className='flex items-center w-32'>
                            <label htmlFor="price" className='mb-0.5 mr-2'>from</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="border-none outline-none w-32"
                                placeholder="0.00"
                                onChange={e => handleChange(setPrice, e)}
                                onKeyUp={handleKeyUp} />
                        </div>
                        <div className='flex items-center w-32'>
                            <label htmlFor="price2" className='mb-0.5 mr-2'>to</label>
                            <input
                                type="text"
                                name="price2"
                                id="price2"
                                className="border-none outline-none w-32 bg-transparent"
                                placeholder="0.00"
                                onChange={e => handleChange(setToPrice, e)}
                                onKeyUp={handleKeyUp} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label
                            htmlFor="season"
                            className='text-xl font-medium'>
                            Description
                        </label>
                        <input
                            type="text"
                            className="input"
                            id='season'
                            name="season"
                            placeholder='Description'
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