import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createNewCar } from '../../redux/Slices/carSlice';
import LoaderSpinner from '../LoaderSpinner';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
    const { status } = useSelector((state) => state.cars);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [carData, setCarData] = useState({
        "name": "",
        "model": "",
        "image": "",
        "price_per_day": "",
        "gear": "automatic",
        "kilometer": "",
        "motor": "v-4 cylinder",
        "plate_no": "",
    });

    const [errors, setErrors] = useState({});

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            setCarData(prevData => ({
                ...prevData,
                [name]: e.target.files[0]
            }));
        } else if (type === "number") {
            setCarData(prevData => ({
                ...prevData,
                [name]: value ? parseFloat(value) : ""
            }));
        } else {
            setCarData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    // Function to validate inputs
    const validate = () => {
        let tempErrors = {};
        const imageTypes = ["image/jpeg", "image/png", "image/jpg"];

        if (!carData.name) tempErrors.name = "Car name is required.";
        else if (carData.name.length < 2) tempErrors.name = "Car name must be at least 2 characters.";
        if (!carData.model || carData.model < 1886 || carData.model > 2024) tempErrors.model = "Model must be between 1886 and 2024.";
        if (!carData.image || !imageTypes.includes(carData.image.type)) tempErrors.image = "Valid image is required (JPEG, PNG).";
        if (!carData.price_per_day || carData.price_per_day <= 0) tempErrors.price_per_day = "Price must be greater than 0.";
        if (!carData.kilometer || carData.kilometer <= 0) tempErrors.kilometer = "Kilometer must be greater than 0.";
        if (!carData.plate_no) tempErrors.plate_no = "Plate number is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Function to submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const result = await dispatch(createNewCar(carData)).unwrap()




                if (result) {
                    toast.success("Data sent successfully");
                    navigate('/cars');
                }


                setCarData({
                    name: "",
                    model: "",
                    image: "",
                    price_per_day: "",
                    gear: "automatic",
                    kilometer: "",
                    motor: "v-4 cylinder",
                    plate_no: "",
                });
            } catch (error) {
                toast.error(`Data sending error: ${error.message}`);
            }
        }
    };

    // Function to process input files (images)
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        setCarData(prevData => ({
            ...prevData,
            image: file
        }));
    };



    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Add Car</h2>

            <form onSubmit={handleSubmit}>
                <div className="btns flex justify-around gap-3">
                    <div className="w-[50%]">
                        <label className="block mb-2">Car Name</label>
                        <input
                            type="text"
                            name="name"
                            value={carData.name}
                            onChange={handleInputChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}

                        <label className="block mb-2">Model</label>
                        <input
                            type="number"
                            name="model"
                            value={carData.model}
                            onChange={handleInputChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        />
                        {errors.model && <p className="text-red-500">{errors.model}</p>}

                        <label className="block mb-2">Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        />
                        {errors.image && <p className="text-red-500">{errors.image}</p>}

                        <label className="block mb-2">Price per Day</label>
                        <input
                            type="number"
                            name="price_per_day"
                            value={carData.price_per_day}
                            onChange={handleInputChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        />
                        {errors.price_per_day && <p className="text-red-500">{errors.price_per_day}</p>}
                    </div>

                    <div className="w-[50%]">
                        <label className="block mb-2">Gear</label>
                        <select
                            name="gear"
                            value={carData.gear}
                            onChange={handleInputChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        >
                            <option value="automatic">Automatic</option>
                            <option value="manual">Manual</option>
                        </select>

                        <label className="block mb-2">Kilometer</label>
                        <input
                            type="number"
                            name="kilometer"
                            value={carData.kilometer}
                            onChange={handleInputChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        />
                        {errors.kilometer && <p className="text-red-500">{errors.kilometer}</p>}

                        <label className="block mb-2">Motor</label>
                        <select
                            name="motor"
                            value={carData.motor}
                            onChange={handleInputChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        >
                            <option value="v-4 cylinder">V-4 cylinder</option>
                            <option value="v-6 cylinder">V-6 cylinder</option>
                            <option value="v-8 cylinder">V-8 cylinder</option>
                        </select>

                        <label className="block mb-2">Plate Number</label>
                        <input
                            type="text"
                            name="plate_no"
                            value={carData.plate_no}
                            onChange={handleInputChange}
                            className="mb-2 w-full border border-gray-500 rounded py-1 px-2"
                        />
                        {errors.plate_no && <p className="text-red-500">{errors.plate_no}</p>}
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <button type="submit" className="bg-gray-400 hover:bg-gray-600 hover:text-gray-300 py-2 px-5 rounded">
                        {status === "loading" ? <LoaderSpinner /> : "Add Car"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCar;
