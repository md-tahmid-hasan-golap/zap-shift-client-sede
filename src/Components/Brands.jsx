import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from "../../src/assets/brands/amazon.png";
import brand2 from "../../src/assets/brands/amazon_vector.png";
import brand3 from "../../src/assets/brands/casio.png";
import brand4 from "../../src/assets/brands/moonstar.png";
import brand5 from "../../src/assets/brands/randstad.png";
import brand6 from "../../src/assets/brands/star.png";
import brand7 from "../../src/assets/brands/start_people.png";

const Brands = () => {
  const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <div className="my-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
        We've helped thousands of sales teams
      </h2>

      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-10 w-auto mx-8 object-contain"
            alt={`brand-${i}`}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;
