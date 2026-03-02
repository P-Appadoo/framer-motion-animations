import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const SlideImageReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ['start end', 'end start'],
  //   });

  //   const x = useTransform(scrollYProgress, [1, 0], ['100%', '0']);
  //   const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div
      ref={containerRef}
      className='relative w-full h-screen overflow-hidden'
    >
      <motion.img
        initial={{ x: 100 }}
        whileInView={{
          x: 0,
          transition: { duration: 2, delay: 1 },
        }}
        className='absolute w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='car'
      />
      <motion.div
        className='absolute w-full h-[200vh] bg-white'
        initial={{ rotate: 0, x: 0, y: 0 }}
        whileInView={{
          rotate: -45,
          x: -1200,
          y: -500,
          transition: { duration: 2, delay: 1 },
        }}
      />
    </div>
  );
};

export default SlideImageReveal;
