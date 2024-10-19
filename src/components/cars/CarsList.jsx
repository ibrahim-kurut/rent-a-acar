import React from 'react'
import CarItem from './CarItem'

const CarsList = ({ cars }) => {
    return (
        <div className="">
            <CarItem cars={cars} />
        </div>
    )
}

export default CarsList