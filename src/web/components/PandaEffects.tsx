import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export const PandaCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        backgroundColor: isHovering ? 'rgba(46, 107, 77, 0.4)' : 'transparent',
        boxShadow: isHovering ? '0 0 40px 20px rgba(46, 107, 77, 0.3)' : 'none',
        scale: isHovering ? 2.5 : 0,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 150 }}
    />
  );
};

export const PandaEasterEgg = () => {
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const nextInput = (input + e.key).slice(-5).toLowerCase();
      setInput(nextInput);
      
      if (nextInput === "panda") {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 10000); // Fade out after 10s
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [input]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
        >
          <div className="text-[40vw] font-black text-primary select-none rotate-12">
            PANDA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
