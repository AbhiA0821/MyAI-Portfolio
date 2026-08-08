import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  delay = 0,
  as = 'h2'
}) => {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay }
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)'
    }
  };

  const Component = motion[as];

  return (
    <Component
      className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, idx) => (
        <motion.span variants={child} key={idx} className="inline-block">
          {word}
        </motion.span>
      ))}
    </Component>
  );
};
