import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux/Slices/carSlice'

const MyCars = () => {
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
            <div className="overflow-x-auto h-[95vh]">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm leading-normal">
                            <th className="py-3 px-4 sm:px-6 text-left border border-gray-500">ID</th>
                            <th className="py-3 px-4 sm:px-6 text-left border border-gray-500">Car Name</th>
                            <th className="py-3 px-4 sm:px-6 text-left border border-gray-500">Car Model</th>
                            <th className="py-3 px-4 sm:px-6 text-left border border-gray-500">Price Per Day</th>
                            <th className="py-3 px-4 sm:px-6 text-left border border-gray-500">Plate No</th>
                            <th className="py-3 px-4 sm:px-6 text-left border border-gray-500">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm font-semibold">
                        {cars.map((car, i) => (
                            <tr key={car.id} className="border-b border-gray-300 hover:bg-gray-400">
                                <td className="py-3 px-4 sm:px-6 text-left border border-gray-600">{i + 1}</td>
                                <td className="py-3 px-4 sm:px-6 text-left border border-gray-600">{car.name}</td>
                                <td className="py-3 px-4 sm:px-6 text-left border border-gray-600">{car.model}</td>
                                <td className="py-3 px-4 sm:px-6 text-left border border-gray-600">{car.price_per_day} $</td>
                                <td className="py-3 px-4 sm:px-6 text-left border border-gray-600">{car.plate_no}</td>
                                <td className="py-3 px-4 sm:px-6 text-left border border-gray-600">
                                    <button className="bg-green-600 text-white rounded capitalize px-2 py-1 mr-2 text-xs sm:text-sm w-full md:w-fit">Edit</button>
                                    <button className="bg-red-600 text-white rounded capitalize px-2 py-1 text-xs sm:text-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default MyCars