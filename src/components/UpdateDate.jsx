import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReservation } from '../redux/Slices/reserveSlice';
import { toast } from 'react-toastify';

const UpdateDate = ({ setOpenEdit, reservation }) => {
    const [start_date, setStart_date] = useState(reservation?.start_date || '');
    const [end_date, setEnd_date] = useState(reservation?.end_date || '');

    const { error } = useSelector(state => state.reservations);


    const dispatch = useDispatch();
    // handle update
    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedData = {
            car: reservation?.car, // Ensure that car is sent
            start_date,
            end_date
        };

        // Send the request to update the reservation
        dispatch(updateReservation({
            reservationId: reservation.id, // Passing the booking ID
            updatedData, // Pass the updated data
        }))
            .then((result) => {
                if (!result) {
                    setOpenEdit(false);
                    toast.success('Reservation updated successfully');
                } else {
                    toast.error(`${error?.start_date}`)
                }
            });
    };

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
                            value={start_date}
                            onChange={(e) => setStart_date(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <label className="capitalize text-sm md:text-xl mb-2 text-red-500" htmlFor="end">End Date</label>
                        <input
                            type="date"
                            id="end"
                            className="px-2 py-1 rounded border border-gray-600 w-full md:w-auto"
                            value={end_date}
                            onChange={(e) => setEnd_date(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClick={handleUpdate}
                    type='submit'
                    className="bg-green-400 px-4 py-2 text-lg capitalize mt-3 rounded w-full">Update</button>
            </form>
        </div>
    );
}

export default UpdateDate;
