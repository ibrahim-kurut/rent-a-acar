import React from 'react'
import HomeSlide from '../components/homeComp/HomeSlide'


const Home = () => {
    return (
        <div>
            <div className="h-[60vh] overflowHome">
                <p className="text-white flex justify-center items-center h-[40vh] text-3xl md:text-6xl font-semibold ">Search Your Best Cars Here</p>
            </div>
            <HomeSlide />
        </div>
    )
}

export default Home