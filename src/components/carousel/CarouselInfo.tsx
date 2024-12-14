import { motion } from 'framer-motion';
import { Destination } from '../../types/destination';

interface CarouselInfoProps {
  destination: Destination;
}

export function CarouselInfo({ destination }: CarouselInfoProps) {
  return (
    <div className="absolute bottom-8 left-8 max-w-lg">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/30 p-6 rounded-lg backdrop-blur-[2px]"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white mb-2"
        >
          {destination.name}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/90"
        >
          {destination.description}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/70 text-sm mt-2"
        >
          {destination.location}
        </motion.p>
      </motion.div>
    </div>
  );
}