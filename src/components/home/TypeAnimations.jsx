"use client";

import { TypeAnimation } from "react-type-animation";

const TypeAnimations = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      className="text-2xl font-bold bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent p-3 mx-3"
      sequence={[
        "W",
        1000,
        "Welcome to Classic Cuts",
        1000,
        "Welcome to Sophisticated",
        1000,
        "Welcome to Stylish",
        1000,
        "Welcome to Arts of Barbering",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
};
export default TypeAnimations;
