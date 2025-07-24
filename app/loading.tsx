"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Variants } from 'framer-motion';

export default function Loading({ isLoading, setIsLoading }: { isLoading: boolean; setIsLoading?: (value: boolean) => void }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const animateText = async () => {
      const phase1 = 'Katya';
      for (let i = 0; i <= phase1.length; i++) {
        setDisplayText(phase1.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      await new Promise((resolve) => setTimeout(resolve, 200));

      const phase2 = 'Kat';
      for (let i = phase1.length; i >= phase2.length; i--) {
        setDisplayText(phase1.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      await new Promise((resolve) => setTimeout(resolve, 200));

      const phase3 = 'Kat_masl';
      for (let i = phase2.length; i <= phase3.length; i++) {
        setDisplayText(phase3.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      await new Promise((resolve) => setTimeout(resolve, 500));

      setShowCursor(false);
      if (typeof setIsLoading === 'function') {
        setIsLoading(false);
      } else {
        console.warn('setIsLoading is not a function');
      }
    };

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    animateText();

    return () => clearInterval(cursorInterval);
  }, [setIsLoading]);

   const loaderVariants: Variants = {
     initial: { opacity: 1, y: 0 },
     exit: { 
       opacity: 0, 
       y: -100, 
       transition: { 
         duration: 1, 
         ease: [0.42, 0, 0.58, 1] 
       } 
     },
   };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 w-screen h-screen min-h-screen flex items-center justify-center bg-[#F5F5F5] z-[100] loading-div"
          variants={loaderVariants}
          initial="initial"
          exit="exit"
        >
          <div className="flex items-center justify-center">
            <motion.span
              className="text-[4rem] md:text-[3rem] font-bold text-[#1A1A1A] font-manrope tracking-tight leading-none"
              animate={{ opacity: 1 }}
            >
              {displayText}
            </motion.span>
            <motion.span
              className="text-[4rem] md:text-[3rem] font-bold text-[#1A1A1A] font-manrope leading-none"
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0.1 }}
            >
              |
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}