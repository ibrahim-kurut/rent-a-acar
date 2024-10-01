import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json"
import DetailsCar from '../components/cars/DetailsCar'
import HeaderHero from '../components/HeaderHero'
const CarDetails = () => {
    const { id } = useParams()

    // Search for a car in the data by id
    const car = data.cars.find(car => car.id === parseInt(id));
    return (
        <div>
            <HeaderHero />
            <div className="container mx-auto">
                <DetailsCar car={car} />
            </div>
        </div>
    )
}

export default CarDetails