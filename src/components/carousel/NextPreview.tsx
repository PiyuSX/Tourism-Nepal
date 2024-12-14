import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Destination } from '../../types/destination';

interface NextPreviewProps {
  destination: Destination;
  onClick: () => void;
}

export function NextPreview({ destination, onClick }: NextPreviewProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className="absolute bottom-8 right-8 z-20"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 1.2,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        onClick={onClick}
        className="cursor-pointer group"
      >
        <div className="relative w-32 h-24 sm:w-48 sm:h-32 overflow-hidden rounded-lg">
          <motion.img
            src={destination.image}
            alt="Next destination"
            className="w-full h-full object-cover"
            whileTap={{
              scale: 1.3,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity group-hover:opacity-80"
            whileTap={{
              opacity: 0,
              transition: {
                duration: 0.2
              }
            }}
          >
            <div className="absolute bottom-3 left-3 flex items-center">
              <h3 className="text-xs sm:text-sm text-white font-medium">{destination.name}</h3>
              <ChevronRight className="w-4 h-4 text-white ml-1" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}