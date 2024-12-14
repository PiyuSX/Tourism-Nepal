import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center space-x-2"
    >
      <Mountain className="w-10 h-10 text-gradient" />
      <h1 className="text-2xl font-bold text-gradient">TOURISM NEPAL</h1>
    </motion.div>
  );
}