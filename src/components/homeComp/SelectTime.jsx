import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SelectDate = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const today = new Date();
        // Get yesterday's date
        today.setDate(today.getDate() - 1);

        if (!startDate || !endDate) {
            toast.error("Please enter both start and end dates")
        } else {
            const selectedDate = new Date(startDate);
            if (selectedDate < today) {
                toast.error("You cannot choose an old date")
            } else if (endDate < startDate) {
                toast.error("End date is greater than start date")
            } else {
                navigate("/cars");
            }
        }
    };

    return (
        <div className="w-full md:w-1/2 bg-gray-700 flex flex-wrap md:flex-nowrap items-center gap-3 px-3 py-2 shadow-lg shadow-black rounded">
            <div className="img w-full md:w-[50%] relative overflow-hidden">
                <div className="overflow bg-black opacity-70 w-full h-full absolute top-0 left-0"></div>
                <img src="../../../assets/imgs/deal.jpg" alt="time" className="w-[100%] rounded" />
            </div>
            <div className="time flex w-full justify-between md:justify-start md:gap-2">
                <div className="flex flex-col items-center w-full md:w-auto">
                    <label className="capitalize text-sm md:text-xl mb-2" htmlFor="start">Start Date</label>
                    <input
                        type="date"
                        id="start"
                        className="px-2 py-1 rounded bg-gray-500 w-full md:w-auto"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center w-full md:w-auto">
                    <label className="capitalize text-sm md:text-xl mb-2" htmlFor="end">End Date</label>
                    <input
                        type="date"
                        id="end"
                        className="px-2 py-1 rounded bg-gray-500 w-full md:w-auto"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <button
                type="button"
                className="bg-gray-400 mt-4 md:mt-8 px-4 py-2 capitalize rounded hover:bg-gray-500 w-full md:w-40"
                onClick={handleSubmit}
            >
                Find Car
            </button>

        </div>
    );
};

export default SelectDate;
