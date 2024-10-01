import React, { useState } from 'react'

const UpdateDate = ({ setOpenEdit }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // handle update
    const handleUpdate = (e) => {
        e.preventDefault();
        setOpenEdit(false)
    }

    return (
        <div>
            <form>
                <div className="time flex w-full justify-between md:justify-start md:gap-2">
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <label className="capitalize text-sm md:text-xl mb-2 text-red-500" htmlFor="start">Start Date</label>
                        <input
                            type="date"
                            id="start"
                            className="px-2 py-1 rounded border border-gray-600 w-full md:w-auto"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <label className="capitalize text-sm md:text-xl mb-2 text-red-500" htmlFor="end">End Date</label>
                        <input
                            type="date"
                            id="end"
                            className="px-2 py-1 rounded border border-gray-600 w-full md:w-auto"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClick={handleUpdate}
                    type='submit'
                    className="bg-green-400 px-4 py-2 text-lg capitalize mt-3 rounded w-full">update</button>
            </form>
        </div>
    )
}

export default UpdateDate