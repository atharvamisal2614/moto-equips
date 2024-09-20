
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    pauseOnHover: true,
  };
  return (
    <>
    <Slider {...settings}>
      <div>
      <Image src="/motor-3.jpg" alt="background" width={1960} height={816} />
      </div>
      <div>
      <Image src="/motor-2.jpg" alt="background" width={1960} height={816} />
      </div>
      <div>
      <Image src="/motor-1.jpg" alt="background" width={1960} height={816} />
      </div>
    
    </Slider>
  
    </>
  );
}
