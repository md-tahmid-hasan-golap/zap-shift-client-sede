import React from "react";
import image from "../../src/assets/brands/location-merchant.png";

const Customar = () => {
  return (
    <div
      className="rounded-3xl p-6 md:p-10 lg:p-14 text-white"
      style={{
        background: "linear-gradient(135deg, #00313F, #004F4F, #006B6B)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Merchant and Customer Satisfaction
            <br /> is Our First Priority
          </h2>

          <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. ZapShift Courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button className="px-6 py-3 bg-lime-300 text-gray-900 font-semibold rounded-full hover:bg-lime-400 transition">
              Become a Merchant
            </button>

            <button className="px-6 py-3 border border-lime-300 text-lime-300 font-semibold rounded-full hover:bg-lime-300 hover:text-gray-900 transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="merchant"
            className="w-60 md:w-80 lg:w-96 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Customar;
