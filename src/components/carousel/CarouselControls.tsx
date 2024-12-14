import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

export function CarouselControls({ onNext, onPrev }: CarouselControlsProps) {
  const buttonClasses = "bg-black/50 p-3 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors";
  
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        className={buttonClasses}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className={buttonClasses}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </motion.button>
    </div>
  );
}