import React from "react";
import { motion } from "framer-motion";
import bookingsIcon from "../../src/assets/banner/bookingIcon.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const Works = () => {
  const items = [
    {
      title: "Booking Pick & Drop",
      text: "From personal packages to business shipments — we deliver on time, every time.",
      icon: bookingsIcon,
    },
    {
      title: "Real-Time Tracking",
      text: "Track your shipment live and stay updated at every step of the journey.",
      icon: bookingsIcon,
    },
    {
      title: "Fast Delivery",
      text: "Our delivery experts ensure your product reaches safely and quickly.",
      icon: bookingsIcon,
    },
    {
      title: "Secure Packaging",
      text: "We pack your items with care so they stay protected throughout the journey.",
      icon: bookingsIcon,
    },
  ];

  return (
    <div className="my-16 px-4 md:px-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        How it <span className="text-blue-600">Works</span>
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="shadow-lg p-6 rounded-2xl bg-white hover:shadow-2xl transition-all text-center space-y-4 border border-gray-100"
          >
            <motion.img
              src={item.icon}
              alt=""
              className="w-16 mx-auto"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring" }}
            />

            <h3 className="text-xl font-semibold">{item.title}</h3>

            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;
