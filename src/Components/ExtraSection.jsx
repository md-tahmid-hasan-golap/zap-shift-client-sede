import React from "react";
import { motion } from "framer-motion";

import liveTracking from "../../src/assets/banner/live-tracking.png";
import safeDelevery from "../../src/assets/banner/safe-delivery.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const ExtraSection = () => {
  const cardData = [
    {
      img: liveTracking,
      title: "Live Parcel Tracking",
      text: "Stay updated in real-time with our live parcel tracking feature. Monitor your shipment's journey and get instant updates.",
    },
    {
      img: safeDelevery,
      title: "100% Safe Deliveries",
      text: "We ensure your parcels are handled with care. Our reliable process guarantees safe and damage-free delivery.",
    },
    {
      img: safeDelevery,
      title: "24/7 Call Center Support",
      text: "Our dedicated support team is available around the clock for any questions or delivery concerns.",
    },
  ];

  return (
    <div>
      <div className="my-20 bg-gray-50 p-7 md:p-10 rounded-lg">
        {cardData.map((item, i) => (
          <motion.section
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-center bg-white gap-6 md:gap-16 justify-center shadow-lg rounded-2xl p-6 mb-7 transition duration-300"
          >
            <motion.img
              src={item.img}
              alt=""
              className="w-24 md:w-32 object-contain"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring" }}
            />

            <div className="text-center md:text-left space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
            </div>
          </motion.section>
        ))}
      </div>

      <p className="border mb-7 border-gray-500 border-dashed"></p>
    </div>
  );
};

export default ExtraSection;
