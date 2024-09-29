import React from 'react'
import HomeSlide from '../components/homeComp/HomeSlide'
import SelectDate from '../components/homeComp/SelectTime'

const Home = () => {
    return (
        <div className="">
            <div className="h-[60vh] overflowHome">
                <p className="text-white flex justify-center items-center h-[40vh] text-3xl md:text-6xl font-semibold ">Search Your Best Cars Here</p>
            </div>
            <HomeSlide />
            <div className="flex justify-center absolute bottom-[1rem] md:bottom-[13rem]  z-10">
                <SelectDate />
            </div>
            <div className="container mx-auto pl-2 pb-5">
                <h1 className="mt-72 md:mt-24 pb-5 text-xl md:text-4xl ">
                    About US
                </h1>
                <p className="text-2xl md:text-5xl">
                    Welcome to Firmname Rent
                </p>
            </div>
        </div>
    )
}

export default Home