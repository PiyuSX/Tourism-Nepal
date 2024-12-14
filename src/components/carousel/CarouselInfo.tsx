import { motion } from 'framer-motion';
import { Destination } from '../../types/destination';
import { useEffect, useState } from 'react';

interface CarouselInfoProps {
  destination: Destination;
}

export function CarouselInfo({ destination }: CarouselInfoProps) {
  const [formattedName, setFormattedName] = useState(destination.name);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640 && destination.name.length > 12) {
        const words = destination.name.split(' ');
        const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
        const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');
        setFormattedName(`${firstLine}\n${secondLine}`);
      } else {
        setFormattedName(destination.name);
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Check on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [destination.name]);

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
          className="text-2xl sm:text-4xl font-bold text-white mb-2 break-words mobile-line-break"
        >
          {formattedName}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/70 text-xs sm:text-sm mt-2"
        >
          {destination.location}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/90 hidden sm:block" // Hide on mobile view
        >
          {destination.description}
        </motion.p>
      </motion.div>
    </div>
  );
}