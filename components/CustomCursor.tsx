"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState('#666666');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const color = target.getAttribute('data-cursor-color') || '#8B8D7A';
      setCursorColor(color);
      if (target.closest('.cursor-grow')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setCursorColor('#666666');
      setIsHovering(false);
    };

    const registerEvents = () => {
      const hoverElements = document.querySelectorAll('.cursor-grow');
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return hoverElements;
    };

    let hoverElements: NodeListOf<Element> = document.querySelectorAll('.cursor-grow');
    if (hoverElements.length === 0) {
      const observer = new MutationObserver(() => {
        hoverElements = document.querySelectorAll('.cursor-grow');
        if (hoverElements.length > 0) {
          registerEvents();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      registerEvents();
    }

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 15,
      height: 15,
      backgroundColor: cursorColor,
      opacity: 1,
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: cursorColor,
      opacity: 0.8,
    },
  };

  return (
    <motion.div
      className="custom-cursor fixed pointer-events-none rounded-full z-[9999] bg-[#666666]"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ duration: 0.1, ease: 'easeOut' }}
    />
  );
}