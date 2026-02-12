import Reveal from "./Reveal";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center mx-auto gap-3">
      <Reveal>
        <h1 className="text-4xl font-bold">
          Welcome to Framer Motion Animations
          <span className="text-emerald-300">.</span>
        </h1>
      </Reveal>
      <Reveal>
        <p className="text-2xl text-emerald-300">
          Explore the power of animations in your React applications.
        </p>
      </Reveal>
      <Reveal>
        <p>
          We provide a variety of animation examples and tutorials to help you
          get started.
        </p>
      </Reveal>
    </div>
  );
};

export default Hero;
