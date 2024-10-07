import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import AddCar from './AddCar';
import Users from './Users';
import RentedCar from './RentedCar';
import MyCars from './MyCars';

const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen flex-col md:flex-row">
            {/* Toggle Button for Small Screens */}
            <div className="md:hidden bg-gray-800 text-white p-4 border-b border-b-gray-600 flex items-center justify-between">
                <h1 className="text-lg font-bold">Admin Dashboard</h1>
                <button
                    className="p-2 focus:outline-none"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {!isSidebarOpen && <RxHamburgerMenu size={25} />}
                </button>
            </div>


            {/* Sidebar */}
            <div className={`w-full md:w-1/4 bg-gray-600  p-4 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} fixed md:relative md:flex flex-col h-full md:h-auto`}>
                <div className="flex justify-end">
                    {isSidebarOpen &&
                        <span onClick={() => setIsSidebarOpen(false)}><IoMdClose size={25} /></span>
                    }
                </div>
                <ul>
                    <li
                        className="cursor-pointer p-2 hover:bg-gray-700"
                        onClick={() => { setSelectedSection('addCar'); setIsSidebarOpen(false); }}
                    >
                        Add Car
                    </li>
                    <li
                        className="cursor-pointer p-2 hover:bg-gray-700"
                        onClick={() => { setSelectedSection('my_cars'); setIsSidebarOpen(false); }}
                    >
                        My Cars
                    </li>
                    <li
                        className="cursor-pointer p-2 hover:bg-gray-700"
                        onClick={() => { setSelectedSection('users'); setIsSidebarOpen(false); }}
                    >
                        Users
                    </li>
                    <li
                        className="cursor-pointer p-2 hover:bg-gray-700"
                        onClick={() => { setSelectedSection('rented'); setIsSidebarOpen(false); }}
                    >
                        Rented Car
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-grow w-full md:w-3/4  p-4">
                {selectedSection === 'addCar' && (
                    <AddCar />
                )}
                {selectedSection === 'my_cars' && (
                    <MyCars />
                )}

                {selectedSection === 'users' && (
                    <Users />
                )}

                {selectedSection === 'rented' && (
                    <RentedCar />
                )}

                {!selectedSection && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                        <p>Select an option from the left to view its details.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
