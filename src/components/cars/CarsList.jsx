import React from 'react'
import CarItem from './CarItem'

const CarsList = ({ data }) => {
    return (
        <div className="">
            <CarItem data={data} />
        </div>
    )
}

export default CarsList