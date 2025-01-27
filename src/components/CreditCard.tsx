import { motion } from "framer-motion";

const CreditCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="gradient-card w-72 h-44 rounded-xl shadow-lg relative"
    >
      <div className="absolute top-4 left-4">
        <div className="w-12 h-8 bg-white/20 rounded-md"></div>
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="text-lg">Co-operate Card</div>
        <div className="mt-2 text-sm opacity-80">4255 5432 3524 0000</div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="text-white text-xl font-bold">VISA</div>
      </div>
    </motion.div>
  );
};

export default CreditCard;