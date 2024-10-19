import React from 'react'
import { Link } from 'react-router-dom'

const CarItem = ({ cars }) => {

    console.log(cars.length > 0);

    return (
        <div className="flex flex-wrap gap-3 mt-5 justify-center">
            {
                cars.length > 0 && cars.map((item) => {
                    return (
                        <div key={item.id} className="card w-full sm:w-1/2 lg:w-1/4 bg-slate-600 p-3 rounded capitalize">
                            <div className="img h-[200px] md:h-[250px] lg:h-[250px]">
                                {/* <img className="h-full w-full" src={item.image} alt={item.name} /> */}
                                <p className="h-full w-full">img</p>
                            </div>
                            <div className="card-body mt-3 ">
                                <p className="text-white capitalize">Name: {item.brand} {item.model}</p>
                                <p className="text-white">Price per day: {item.rent_per_day}</p>
                            </div>
                            <div className="btns flex justify-between my-3">
                                <Link to={`/rent-car/${item.id}`} className="bg-blue-600 text-white px-2 capitalize rounded hover:bg-blue-700">Rent Car</Link>
                                <Link to={`/car_details/${item.id}`} className="bg-green-600 text-white px-2 capitalize rounded hover:bg-green-700">Details</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CarItem
