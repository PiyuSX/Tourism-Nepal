import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Destination } from '../types/destination';
import { CarouselInfo } from './carousel/CarouselInfo';
import { NextPreview } from './carousel/NextPreview';
import { CarouselImage } from './carousel/CarouselImage';

interface CarouselProps {
  destinations: Destination[];
}

export function Carousel({ destinations }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextIndex = (currentIndex + 1) % destinations.length;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex(nextIndex);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <CarouselImage
          key={currentIndex}
          image={destinations[currentIndex].image}
          direction={direction}
        />
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        <CarouselInfo key={currentIndex} destination={destinations[currentIndex]} />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <NextPreview
          key={nextIndex}
          destination={destinations[nextIndex]}
          onClick={handleNext}
        />
      </AnimatePresence>
    </div>
  );
}