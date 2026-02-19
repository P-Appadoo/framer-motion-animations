"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const SquareScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="h-screen">
      <motion.div
        ref={ref}
        style={{ opacity: opacity }}
        className="size-56 bg-blue-500"
      />
    </div>
  );
};

export default SquareScroll;
