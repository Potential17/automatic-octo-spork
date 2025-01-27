import { motion } from "framer-motion";

interface PartnerCardProps {
  name: string;
  delay?: number;
}

const PartnerCard = ({ name, delay = 0 }: PartnerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-sm p-6 w-[200px] h-[100px] flex items-center justify-center"
    >
      <span className="text-xl font-medium text-gray-800">{name}</span>
    </motion.div>
  );
};

export default PartnerCard;