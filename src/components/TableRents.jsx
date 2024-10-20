import React, { useState } from 'react';
import UpdateDate from './UpdateDate';

const TableRents = ({ userReservations }) => {
    const [openEdit, setOpenEdit] = useState('');

    console.log(userReservations);

    // handel edit
    const handleEdit = (e) => {
        e.preventDefault();
        setOpenEdit(!openEdit);

    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Rented</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="capitalize">
                            <th className="py-2 px-2 md:px-4 border-b text-sm md:text-base">plate no</th>
                            <th className="py-2 px-2 md:px-4 border-b text-sm md:text-base">car name</th>
                            <th className="py-2 px-2 md:px-4 border-b text-sm md:text-base">start date</th>
                            <th className="py-2 px-2 md:px-4 border-b text-sm md:text-base">end date</th>
                            <th className="py-2 px-2 md:px-4 border-b text-sm md:text-base">price</th>
                            <th className="py-2 px-2 md:px-4 border-b text-sm md:text-base">update</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            userReservations.length > 0 ? (
                                userReservations.map((item) => (
                                    <tr className="uppercase" key={item.id}>
                                        <td className="py-2 px-2 md:px-4 border-b text-center text-sm md:text-base">
                                            {item?.plate_number}
                                        </td>
                                        <td className="py-2 px-2 md:px-4 border-b text-center text-sm md:text-base">
                                            {item?.car_name}
                                        </td>
                                        <td className="py-2 px-2 md:px-4 border-b text-center text-sm md:text-base">
                                            {item?.start_date}
                                        </td>
                                        <td className="py-2 px-2 md:px-4 border-b text-center text-sm md:text-base">
                                            {item?.end_date}
                                        </td>
                                        <td className="py-2 px-2 md:px-4 border-b text-center text-sm md:text-base">
                                            {item?.total_price} $
                                        </td>
                                        <td
                                            onClick={() => handleEdit(item?.id)}
                                            className="py-2 px-2 md:px-4 text-center cursor-pointer border-b bg-yellow-300 text-sm md:text-base">
                                            Edit
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <p>
                                    There are no reservations
                                </p>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                openEdit && <div className="flex justify-center mt-10">
                    <UpdateDate setOpenEdit={setOpenEdit} />
                </div>
            }
        </div>
    );
};

export default TableRents;
