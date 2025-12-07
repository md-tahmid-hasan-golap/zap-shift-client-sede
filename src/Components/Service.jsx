import React from "react";
import { motion } from "framer-motion";
import service from "../../src/assets/banner/service.png";

// animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
  }),
};

const Service = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      text: "We deliver parcels within 24–72 hours in major cities. Express delivery available in Dhaka within 4–6 hours.",
      bg: "white",
    },
    {
      title: "Nationwide Delivery",
      text: "We deliver to all districts with home delivery support, reaching customers within 48–72 hours.",
      bg: "#CAEB66",
    },
    {
      title: "Fulfillment Solution",
      text: "Inventory management, online order processing, packaging and after-sales support.",
      bg: "white",
    },
    {
      title: "Cash on Home Delivery",
      text: "100% secure cash on delivery anywhere in Bangladesh.",
      bg: "white",
    },
    {
      title: "Corporate Service / Logistics Contract",
      text: "Customized corporate solutions including warehouse and inventory management.",
      bg: "white",
    },
    {
      title: "Parcel Return",
      text: "Reverse logistics for customers to return or exchange products easily.",
      bg: "white",
    },
  ];

  return (
    <div className="bg-black py-16 px-4 md:px-10 rounded-lg my-10">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
        className="text-center space-y-4 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed pb-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center space-y-4 transition-all duration-300 border border-gray-100`}
            style={{ background: item.bg }}
          >
            <motion.img
              src={service}
              alt=""
              className="w-20 h-20 object-contain"
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring" }}
            />

            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
