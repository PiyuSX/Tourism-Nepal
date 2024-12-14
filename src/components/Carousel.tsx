import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { Destination } from '../types/destination';
import { CarouselInfo } from './carousel/CarouselInfo';
import { NextPreview } from './carousel/NextPreview';
import { CarouselImage } from './carousel/CarouselImage';
import { Logo } from './Logo'; // Import the Logo component

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
    setTimeout(() => setIsAnimating(false), 1200); // Match the duration of the CSS transition
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-8 left-8 z-30">
        <Logo /> {/* Add the Logo component */}
      </div>
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