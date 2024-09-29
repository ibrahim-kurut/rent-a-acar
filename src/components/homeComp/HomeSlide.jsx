import React from "react";
import Slider from "react-slick";

const HomeSlide = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                <div className="h-[60vh]">
                    <img className="h-full w-[100%]" src="../../assets/imgs/car1.jpg" alt="" />
                </div>
                <div className="h-[60vh]">
                    <img className="h-full w-[100%]" src="../../assets/imgs/car2.jpg" alt="" />
                </div>

            </Slider>
        </div>
    );
}

export default HomeSlide