"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full flex flex-col items-end justify-center bg-white"
    >
      <div className="text-sm mb-4 text-[#A2A2A2]">
        Связаться
      </div>
      <div className="w-full text-center">
        <Link
          href="https://t.me/Kat_masl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000" }}
          className="footer-link font-extrabold tracking-tight cursor-grow select-none w-full text-center px-4 text-[12vw] leading-[1] whitespace-nowrap"
        >
          @KAT_MASL
          <span />
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;