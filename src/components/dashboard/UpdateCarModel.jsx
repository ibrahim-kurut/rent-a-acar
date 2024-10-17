import React, { useState } from 'react'
import { MdClose } from "react-icons/md"
import { toast } from 'react-toastify';

const UpdateCarModel = ({ setOpenUpdateModel, carId, cars }) => {

    const car = cars.find(car => car.id === carId);

    const [updatedCar, setUpdatedCar] = useState({
        brand: car?.brand || "",
        model: car?.model || "",
        rent_per_day: car?.rent_per_day || "",
        plate_number: car?.plate_number || ""
    });

    // update based on the user's entry
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUpdatedCar({ ...updatedCar, [id]: value });
    };


    // Send modified data when clicking on "update"
    const handleSubmit = (e) => {
        e.preventDefault();
        // Sending modified data to the server
        toast.success("ok")
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-1/2 capitalize mt-14 bg-gray-500 p-8 rounded">
            <div className="flex justify-end">
                <MdClose
                    onClick={() => setOpenUpdateModel(false)}
                    className="w-6 h-6 bg-red-400 rounded-full cursor-pointer" size={20} />
            </div>
            <div className="flex flex-col ">
                <label htmlFor='brand'>Car Name</label>
                <input
                    type="text"
                    id="brand"
                    value={updatedCar.brand}
                    onChange={handleInputChange}
                    className="border border-gray-500 rounded outline-none px-2 py-1"
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor='model'>Car Model</label>
                <input
                    type="text"
                    id="model"
                    value={updatedCar.model}
                    onChange={handleInputChange}
                    className="border border-gray-500 rounded outline-none px-2 py-1"
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor='rent_per_day'>Price per Day</label>
                <input
                    type="number"
                    id="rent_per_day"
                    value={updatedCar.rent_per_day}
                    onChange={handleInputChange}
                    className="border border-gray-500 rounded outline-none px-2 py-1"
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor='plate_number'>Plate No</label>
                <input
                    type="text"
                    id="plate_number"
                    value={updatedCar.plate_number}
                    onChange={handleInputChange}
                    className="border border-gray-500 rounded outline-none px-2 py-1"
                />
            </div>
            <button type="submit" className="bg-green-500 w-full mt-5 py-1 rounded capitalize">
                Update
            </button>
        </form>
    );
}

export default UpdateCarModel