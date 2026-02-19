"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Hero from "./components/Hero";
import HorizontalScrolling from "./components/HorizontalScrolling";
import StaggeredTextAnimations from "./components/StaggeredTextAnimations";
import UseAnimate from "./components/UseAnimate";
import ScrollingParallaxEffect from "./components/ScrollingParallaxEffect";
import { SlideTabsExample } from "./components/SlideTabs";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#38c47e", "#b35b5b"],
  );

  return (
    <>
      <motion.div
        className="sticky top-0 w-full h-[10px] origin-left z-20"
        style={{ scaleX, background }}
      />
      <ScrollingParallaxEffect />
      <Hero />
      <SlideTabsExample />
      <HorizontalScrolling />
      <StaggeredTextAnimations />
      <UseAnimate />
      <div className="h-screen"></div>
    </>
  );
}
