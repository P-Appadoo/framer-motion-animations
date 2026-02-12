import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const HorizontalScrolling = () => {
  const targetRef = useRef(null);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
  // const y = useTransform(scrollYProgress, [0, 1], ["1%", "-25%"]);

  const tr = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return (
              <motion.div ref={cardRef} key={card.id} style={{ rotate: tr }}>
                <Card card={card} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({
  card,
}: {
  card: { id: number; url: string; title: string };
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];

export default HorizontalScrolling;
