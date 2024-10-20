import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createReservation } from '../redux/Slices/reserveSlice';

function BookingForm({ cars }) {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const { error } = useSelector(state => state.reservations);
    console.log(error?.start_date);

    // Initial form data, user and car info
    const [formData, setFormData] = useState({
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        email: user?.email || "",
        start_date: "",
        end_date: "",
        car: cars?.id,
    });

    const [totalDays, setTotalDays] = useState(0); // Calculating the number of days
    const [totalPrice, setTotalPrice] = useState(0); // Account of the total price

    // Calculating the total price and number of days based on the date of reservation
    useEffect(() => {
        if (formData.start_date && formData.end_date) {
            const start = new Date(formData.start_date);
            const end = new Date(formData.end_date);

            // Ensure that the date of the end is greater or equal to the start date
            if (end >= start) {
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
                setTotalDays(days);
                setTotalPrice(days * cars.rent_per_day); // Calculating the total price based on the rental price per day
            } else {
                setTotalDays(0);
                setTotalPrice(0);
            }
        } else {
            setTotalDays(0);
            setTotalPrice(0);
        }
    }, [formData.start_date, formData.end_date, cars.rent_per_day]);

    // Car.id set in Formdata after downloading car data
    useEffect(() => {
        if (cars) {
            setFormData(prevState => ({
                ...prevState,
                car: cars.id,
            }));
        }
    }, [cars]);

    // Update the form data when the user changes its inputs
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // form submit handel
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check the user's login
        if (!user) {
            return toast.error("You must be logged in to make a reservation");
        }

        // inputs validation
        if (!formData.first_name.trim()) return toast.error("Please enter your first name");
        if (!formData.last_name.trim()) return toast.error("Please enter your last name");
        if (!formData.email.trim()) return toast.error("Please enter your email");
        if (!formData.start_date.trim()) return toast.error("Please enter the start date");
        if (!formData.end_date.trim()) return toast.error("Please enter the end date");

        // Send data to the server
        try {

            await dispatch(createReservation({
                car: formData.car,
                start_date: formData.start_date,
                end_date: formData.end_date,
            })).unwrap();
            toast.success("Reserved successfully");
        }
        catch (error) {
            toast.error(`${error?.start_date}`)
        }

    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* ========= The first part of the form - user data ========= */}
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
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3"
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
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3"
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
                            className="shadow appearance-none border rounded w-full py-2 px-3"
                            required
                        />
                    </div>

                    {/* The second part of the form - reservation data */}
                    <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                    <div className="mb-4">
                        <label htmlFor="startDate" className="block text-gray-400 font-bold mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="start_date"
                            value={formData.start_date}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3"
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
                            name="end_date"
                            value={formData.end_date}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3"
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
                        Price per Day: <span className="font-normal">{cars.rent_per_day}</span>
                    </p>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        RESERVE NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookingForm;
