import { motion } from "framer-motion";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  isExpanded?: boolean;
  onExpand: () => void;
}

const FeatureCard = ({ title, description, icon, isExpanded = false, onExpand }: FeatureCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg p-6 ${
        isExpanded ? 'w-full lg:w-[80%] mx-auto' : 'w-full lg:w-[300px]'
      } cursor-pointer relative`}
      onClick={onExpand}
    >
      <div className="flex items-start gap-4">
        <div className="bg-[#CCFF00] rounded-xl p-3">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-[#CCFF00] rounded-full p-2"
          onClick={(e) => {
            e.stopPropagation();
            onExpand();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <img src="/uploads/4295c7ac-2871-4125-862d-5a78f9cbf4ac.png" alt="QR Code" className="w-full h-auto" />
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Online payments, minus the friction</h4>
              <p className="text-gray-600">
                Collect online payments, make payouts, onboard customers and offer embedded finance solutions through an intuitive dashboard and easy-to-integrate APIs.
              </p>
              <button className="cta-button px-6 py-2 rounded-full">
                Make Payments
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeatureCard;