import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json"
import DetailsCar from '../components/cars/DetailsCar'
const CarDetails = () => {
    const { id } = useParams()

    // Search for a car in the data by id
    const car = data.cars.find(car => car.id === parseInt(id));
    return (
        <div>
            <div className="img h-[40vh]">
                <div className="overflowDetails"></div>
                <img className="h-full w-full " src="../../assets/imgs/carDashboard.jpg" alt={car.name} />
            </div>
            <div className="container mx-auto">
                <DetailsCar car={car} />
            </div>
        </div>
    )
}

export default CarDetails