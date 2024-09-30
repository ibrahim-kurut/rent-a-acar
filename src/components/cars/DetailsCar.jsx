import React from 'react'
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


const DetailsCar = ({ car }) => {

    return (
        <div className="flex gap-3 mt-5">
            <div className="img w-1/4">
                <img className="rounded" src={car.image} alt={car.name} />
            </div>
            <div className="details w-[60%] capitalize">
                <h2 className="text-2xl font-semibold">name : {car.name}</h2>
                <h4 className="text-xl font-semibold">price per day : {car.price_per_day} $</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis possimus, aliquam, tempore iste nemo in nisi sunt debitis unde explicabo, quod quisquam placeat necessitatibus.
                </p>
                <div className="mt-5 flex justify-around">
                    <div>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><FaCar /></span>
                            <span>Model : {car.model}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><GiGearStickPattern /></span>
                            <span>Gears : {car.gear}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><AiFillDashboard /></span>
                            <span>kilometer : {car.kilometer}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><SiYamahamotorcorporation /></span>
                            <span>motor : {car.motor}</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><IoMdEye /></span>
                            <span>GPS Navigation</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><FaLock /></span>
                            <span>Anti-Lock Breaks</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><FaKey /></span>
                            <span>Remote Keyless</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-red-500"><MdOutlineMonitor /></span>
                            <span>Rear - Seat DVD</span>
                        </p>
                    </div>
                </div>
                <div className="mt-5 w-fit">
                    <Link to="/cars" className="flex items-center animate-pulse">
                        <span><GrFormPreviousLink size={30} /></span>
                        <span> Back to Cars</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailsCar