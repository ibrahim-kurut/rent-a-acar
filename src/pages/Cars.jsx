import React, { useEffect } from 'react'
import CarsList from '../components/cars/CarsList'
// import data from '../data.json'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/Slices/carSlice'
const Cars = () => {


    const dispatch = useDispatch()
    const { cars, error } = useSelector(state => state.cars)
    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    if (error) {
        return <p>Error fetching cars: {error}</p>
    }

    if (!cars || cars.length === 0) {
        return (
            <div className="flex justify-center">
                <p className="bg-red-400 text-center text-xl w-fit px-20 py-10 rounded">No cars available</p>
            </div>
        )
    }

    return (
        <div>
            <CarsList cars={cars} />
        </div>
    )
}

export default Cars