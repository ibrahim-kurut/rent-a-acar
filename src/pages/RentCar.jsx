import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json"
import DetailsCar from '../components/cars/DetailsCar'
import BookingForm from '../components/BookingForm'
const RentCar = () => {

    const { id } = useParams()
    const car = data.cars.find(car => car.id === parseInt(id));

    return (
        <div className="container mx-auto">
            <div className="md:w-[70%]">
                <DetailsCar car={car} />
            </div>
            <div className="rentCar">
                <BookingForm car={car} />
            </div>
        </div>
    )
}

export default RentCar