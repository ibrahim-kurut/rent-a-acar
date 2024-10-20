import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import data from "../data.json"
import DetailsCar from '../components/cars/DetailsCar'
import BookingForm from '../components/BookingForm'
import { useDispatch, useSelector } from 'react-redux'
import { getCarById } from '../redux/Slices/carSlice'
const RentCar = () => {

    const { id } = useParams()

    // Search for a car in the data by id
    const dispatch = useDispatch()
    const { cars } = useSelector(state => state.cars)

    useEffect(() => {
        dispatch(getCarById(id))
    }, [dispatch, id])

    return (
        <div className="container mx-auto">
            <div className="md:w-[70%]">
                <DetailsCar cars={cars} />
            </div>
            <div className="rentCar">
                <BookingForm cars={cars} />
            </div>
        </div>
    )
}

export default RentCar