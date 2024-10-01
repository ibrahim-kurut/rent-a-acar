import React from 'react'
import { useParams } from 'react-router-dom';
import data from "../data.json"
import HeaderHero from '../components/HeaderHero';
import TableRents from '../components/TableRents';


const Rents = () => {


    const { id } = useParams()
    const car = data.cars.find(car => car.id === parseInt(id));
    return (
        <div>
            <HeaderHero />
            <div className="container mx-auto">
                <TableRents car={car} />
            </div>

        </div>
    )
}

export default Rents