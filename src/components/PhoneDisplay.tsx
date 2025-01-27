import { motion } from "framer-motion";

const PhoneDisplay = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-72 bg-white rounded-3xl shadow-xl p-4"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">$85.00</span>
          <div className="flex space-x-2">
            <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
            <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
          </div>
        </div>
        
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
              KYC
            </div>
            <span className="font-medium">KYC Verified</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
          <div className="w-32 h-2 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneDisplay;