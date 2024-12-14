import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  image: string;
  children: React.ReactNode;
}

export function ParallaxSection({ image, children }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{
          y,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}