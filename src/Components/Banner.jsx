import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../src/assets/brands/banner1.png";
import banner2 from "../../src/assets/brands/banner2.png";
import banner3 from "../../src/assets/brands/banner3.png";

import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 rounded-xl overflow-hidden shadow-lg">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        swipeable={true}
      >
        <div>
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-auto object-contain md:object-cover"
          />
        </div>
        <div>
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-auto object-contain md:object-cover"
          />
        </div>
        <div>
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-auto object-contain md:object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
