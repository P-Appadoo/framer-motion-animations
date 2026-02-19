import { useAnimate } from "motion/react";

const UseAnimate = () => {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    await animate(
      "#target",
      { x: 200, backgroundColor: "#f87171" },
      { duration: 0.5 },
    );
    await animate(
      "#target",
      { y: 200, backgroundColor: "#fbbf24" },
      { duration: 0.5 },
    );
    await animate(
      "#target",
      {
        scale: [1, 1.5, 2, 1],
        x: [100, 0, -100, -200],
        rotate: [0, 90, 180, 360],
        backgroundColor: ["#fbbf24", "#f87171", "#fbbf24", "#f87171"],
      },
      { duration: 0.5 },
    );
    await animate(
      "#target",
      {
        y: 0,
        borderRadius: ["0%", "50%", "0%"],
        backgroundColor: ["#f87171", "#fbbf24", "#f87171"],
      },
      { duration: 0.5 },
    );
    await animate(
      "#target",
      {
        x: 0,
      },
      { duration: 0.5 },
    );
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div ref={scope}>
        <div id="target" className="h-20 w-20 bg-amber-600"></div>
        <button onClick={() => handleAnimate()}>Animate</button>
      </div>
    </section>
  );
};

export default UseAnimate;
