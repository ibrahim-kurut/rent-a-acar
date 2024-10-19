import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import data from "../data.json"
import DetailsCar from '../components/cars/DetailsCar'
import HeaderHero from '../components/HeaderHero'
import { useDispatch, useSelector } from 'react-redux'
import { getCarById } from '../redux/Slices/carSlice'
const CarDetails = () => {
    const { id } = useParams()

    // Search for a car in the data by id
    const dispatch = useDispatch()
    const { cars } = useSelector(state => state.cars)

    useEffect(() => {
        dispatch(getCarById(id))
    }, [dispatch, id])

    return (
        <div>
            <HeaderHero />
            <div className="container mx-auto">
                <DetailsCar cars={cars} />
            </div>
        </div>
    )
}

export default CarDetails