import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function BookingForm({ car }) {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        startDate: '',
        endDate: '',
    });

    const navigate = useNavigate()

    const [totalDays, setTotalDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Calculate the time between dates
    useEffect(() => {
        if (formData.startDate && formData.endDate) {
            const start = new Date(formData.startDate);
            const end = new Date(formData.endDate);

            // Check that the end date is greater than or equal to the start date
            if (end >= start) {
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
                setTotalDays(days);
                // Calculate the total price
                setTotalPrice(days * car.price_per_day);
            } else {
                setTotalDays(0);
                setTotalPrice(0);
            }
        } else {
            setTotalDays(0);
            setTotalPrice(0);
        }
    }, [formData.startDate, formData.endDate, car.price_per_day]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //  Validate the form data
        if (formData.firstName.trim() === "") {
            return toast.error("Please enter your first name");
        }
        if (formData.lastName.trim() === "") {
            return toast.error("Please enter your last name");
        }
        if (formData.email.trim() === "") {
            return toast.error("Please enter your email");
        }
        if (formData.startDate.trim() === "") {
            return toast.error("Please enter the start date");
        }
        if (formData.endDate.trim() === "") {
            return toast.error("Please enter the end date");
        }

        // Send data to server
        toast.success("reserve successfully")
        navigate(`/rents/${car.id}`)

    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div>
                <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="md:flex gap-2 justify-between">
                        <div className="mb-4 md:w-1/2">
                            <label htmlFor="firstName" className="block text-gray-400 font-bold mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label htmlFor="lastName" className="block text-gray-400 font-bold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-400 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                    <div className="mb-4">
                        <label htmlFor="startDate" className="block text-gray-400 font-bold mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="endDate" className="block text-gray-400 font-bold mb-2">
                            End Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                </form>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Payment Detail</h2>
                <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-gray-700 font-bold mb-2">
                        Total Price: <span className="font-normal">{totalPrice}</span>
                    </p>
                    <p className="text-gray-700 font-bold mb-2">
                        Rented Days: <span className="font-normal">{totalDays}</span>
                    </p>
                    <p className="text-gray-700 font-bold mb-4">
                        Price per Day: <span className="font-normal">{car.price_per_day}</span>
                    </p>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        RESERVE NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookingForm;
