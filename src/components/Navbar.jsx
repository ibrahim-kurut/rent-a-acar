import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/Slices/userSlice';

const Navbar = ({ toggleTheme, theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    // handle logout
    const handleLogout = () => {
        dispatch(logout());
        setIsMenuOpen(false)
    };




    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Define colors based on the theme
    const dropdownBackgroundColor = theme === "light" ? "bg-white" : "bg-gray-700";
    const linkTextColor = theme === "light" ? "text-balck" : "text-white";

    return (
        <nav className={`relative z-10  border-b-2 border-gray-600 ${dropdownBackgroundColor}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold capitalize">rent a car</div>

                {/* Toggle Button for Mobile */}
                <button
                    className="md:hidden text-blue-500"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? <IoCloseSharp size={25} /> : <GiHamburgerMenu size={25} />
                    }
                </button>

                {/* Links Section */}
                <div className={` absolute top-full w-full md:bg-transparent md:w-fit right-0 transition-all duration-300 ease-in-out md:static md:flex md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <div className={`space-y-2 p-4 md:space-y-0 md:space-x-4 md:flex md:items-center ${dropdownBackgroundColor}`}>
                        <Link onClick={() => setIsMenuOpen(false)} to="/" className={`block ${linkTextColor} hover:text-gray-500 font-semibold container mx-auto`}>home</Link>
                        <Link onClick={() => setIsMenuOpen(false)} to="/cars" className={`block ${linkTextColor} hover:text-gray-500 font-semibold container mx-auto`}>cars</Link>


                        {
                            user ?

                                (<>
                                    <p onClick={handleLogout} className={`block ${linkTextColor} hover:text-gray-500 font-semibold container mx-auto cursor-pointer`}>logout</p>
                                </>)

                                :
                                (<>
                                    <Link onClick={() => setIsMenuOpen(false)} to="/login" className={`block ${linkTextColor} hover:text-gray-500 font-semibold container mx-auto`}>login</Link>
                                </>)



                        }
                        {
                            user?.is_admin && <Link onClick={() => setIsMenuOpen(false)} to="/admin" className={`block ${linkTextColor} hover:text-gray-500 font-semibold container mx-auto`}>admin</Link>
                        }


                        <button onClick={toggleTheme} className={`block ${linkTextColor} hover:text-gray-500 font-semibold container mx-auto`}>
                            {theme === "light" ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


