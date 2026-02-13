import { motion } from "motion/react";

const staggeredTextAnimations = () => {
  return (
    <section className="h-screen grid place-content-center gap-2 bg-green-300 px-8 text-black">
      <FlipLink href="#">Emraan</FlipLink>
      <FlipLink href="#">Bhuvanesh</FlipLink>
      <FlipLink href="#">Poum</FlipLink>
    </section>
  );
};

const DURATION = 0.5;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  const segmentText = (text: string) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment) => segment.segment);
    }
    // Fallback for environments without Intl.Segmenter
    return text.split("");
  };

  const characters = segmentText(children);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      // style={{lineHeight: 0.75}}
    >
      <div>
        {characters.map((char, index) => {
          return (
            <motion.span
              key={index}
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              className="inline-block"
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: index * STAGGER,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {characters.map((char, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: index * STAGGER,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default staggeredTextAnimations;
