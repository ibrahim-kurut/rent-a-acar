import React from 'react';
import { FaCar } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { SiYamahamotorcorporation } from "react-icons/si";
import { IoMdEye } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GrFormPreviousLink } from "react-icons/gr";

const DetailsCar = ({ cars }) => {

    return (
        <div className="details-car flex flex-col p-5 gap-3 md:flex-row md:gap-10 mt-5">
            <div className="img w-full md:w-1/2">
                {/* <img className="rounded" src={car.image} alt={car.name} /> */}
                <p className="bg-gray-400">img</p>
            </div>
            <div className="details w-full md:w-1/2 capitalize">
                <h2 className="text-2xl font-semibold">name: {cars?.brand}</h2>
                <h4 className="text-xl font-semibold my-2">price per day: {cars?.rent_per_day} $</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis possimus, aliquam, tempore iste nemo in nisi sunt debitis unde explicabo, quod quisquam placeat necessitatibus.
                </p>
                <div className="mt-5 flex flex-wrap justify-around">
                    <div className="flex-col">
                        <div className="detail-item flex items-center gap-2 mb-3 md:mb-0">
                            <span className="text-red-500"><FaCar /></span>
                            <span>Model: {cars?.model}</span>
                        </div>
                        <div className="detail-item flex items-center gap-2 mb-3 md:mb-0">
                            <span className="text-red-500"><GiGearStickPattern /></span>
                            <span>Gears: {cars?.gear}</span>
                        </div>
                        <div className="detail-item flex items-center gap-2 mb-3 md:mb-0">
                            <span className="text-red-500"><AiFillDashboard /></span>
                            <span>kilometer: {cars?.kilometer}</span>
                        </div>
                        <div className="detail-item flex items-center gap-2 mb-3 md:mb-0">
                            <span className="text-red-500"><SiYamahamotorcorporation /></span>
                            <span>motor: {cars?.motor}</span>
                        </div>
                    </div>
                    {/* ================ */}
                    <div className="flex-col">
                        <div className="detail-item flex items-center gap-2 mb-3 md:mb-0">
                            <span className="text-red-500"><IoMdEye /></span>
                            <span>GPS Navigation</span>
                        </div>
                        <div className="detail-item flex items-center gap-2 mb-3 md:mb-0">
                            <span className="text-red-500"><FaLock /></span>
                            <span>Anti-Lock Breaks</span>
                        </div>
                        <div className="detail-item flex items-center gap-2 mb-3 md:mb-0">
                            <span className="text-red-500"><FaKey /></span>
                            <span>Remote Keyless</span>
                        </div>
                        <div className="detail-item flex items-center gap-2">
                            <span className="text-red-500"><MdOutlineMonitor /></span>
                            <span>Rear-Seat DVD</span>
                        </div>
                    </div>
                </div>
                <div className="m-5 w-fit">
                    <Link to="/cars" className="flex items-center animate-pulse">
                        <span><GrFormPreviousLink size={30} /></span>
                        <span> Back to Cars</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsCar;