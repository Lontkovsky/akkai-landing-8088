import React from 'react';
import { motion } from 'framer-motion';

export const AudioWave = () => {
  return (
    <div className="flex items-center gap-1 h-12">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={{ 
            height: [4, 24, 8, 32, 4],
            opacity: [0.3, 1, 0.5, 1, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="w-1 bg-primary rounded-full"
        />
      ))}
    </div>
  );
};
