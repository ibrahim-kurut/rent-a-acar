import React from 'react'
import CarsList from '../components/cars/CarsList'
import data from '../data.json'
const Cars = () => {

    return (
        <div>
            <CarsList data={data} />
        </div>
    )
}

export default Cars