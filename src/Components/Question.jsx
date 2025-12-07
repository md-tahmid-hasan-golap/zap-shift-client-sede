import React from "react";
import { motion } from "framer-motion";

const Question = () => {
  const faqItems = [
    {
      q: "How does Zap Shift parcel delivery work?",
      a: "We pick up parcels from your location and deliver within 24–72 hours depending on the city. Express delivery inside Dhaka.",
    },
    {
      q: "How can I track my parcel in real-time?",
      a: "Use our Live Tracking system — enter your parcel ID to monitor your delivery from pick-up to drop-off.",
    },
    {
      q: "Does Zap Shift offer Cash on Delivery (COD)?",
      a: "Yes! We provide secure COD services for businesses and online sellers.",
    },
    {
      q: "What should I do if my parcel gets delayed?",
      a: "Contact our 24/7 support team anytime. We will check your delivery status and update you instantly.",
    },
    {
      q: "Is my parcel safe with Zap Shift?",
      a: "Absolutely! We ensure secure handling, sealed packaging, and damage-free delivery every time.",
    },
    {
      q: "How can I contact customer support?",
      a: "Our call center is available 24/7. You can reach us by phone, email, or live chat.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  return (
    <div className="my-12 text-center max-w-3xl mx-auto px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 mb-3"
      >
        Zap Shift – Frequently Asked Questions
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-gray-600 mb-8 text-sm md:text-base"
      >
        Here are common questions customers ask. Need more? We’re always here!
      </motion.p>

      {/* FAQ List */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {faqItems.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring" }}
            className="collapse collapse-plus bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold text-left text-gray-800">
              {itemData.q}
            </div>
            <div className="collapse-content text-sm text-left text-gray-600">
              {itemData.a}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Question;
