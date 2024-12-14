import { motion, useTransform, useViewportScroll } from 'framer-motion';

interface CarouselImageProps {
  image: string;
  direction: number;
}

export function CarouselImage({ image, direction }: CarouselImageProps) {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1], ["0%", "50%"]);

  const slideVariants = {
    enter: (direction: number) => ({
      scale: 1.2,
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      scale: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      scale: 0.8,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Background Layer - Slower Movement with Zoom */}
      <motion.div
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 100, damping: 30 },
          opacity: { duration: 0.8 },
          scale: { duration: 0.8, ease: "easeOut" }
        }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
          y
        }}
      />

      {/* Foreground Layer - Faster Movement with Enhanced Zoom */}
      <motion.div
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 150, damping: 30 },
          opacity: { duration: 0.5 },
          scale: { duration: 0.8, ease: "easeOut" }
        }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />

      {/* Overlay Layer - Dynamic Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"
      />
    </>
  );
}