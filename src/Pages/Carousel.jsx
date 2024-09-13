//import React from "react";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full justify-center items-center ml-16">
      <Slider {...settings} className="w-full px-4 py-5 bg-blue-300">
        <div className="bg-blue-700 text-white p-4">
          <h3>1</h3>
        </div>
        <div className="bg-blue-700 text-white p-4">
          <h3>2</h3>
        </div>
        <div className="bg-blue-700 text-white p-4">
          <h3>3</h3>
        </div>
        <div className="bg-blue-700 text-white p-4">
          <h3>4</h3>
        </div>
        <div className="bg-blue-700 text-white p-4">
          <h3>5</h3>
        </div>
        <div className="bg-blue-700 text-white p-4">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
