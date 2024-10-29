import React from "react";
import { MoveRight } from "lucide-react";

const Hero = ({ scrollToProjects }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-bold">Frontend developer</h1>
      <p className="text-xl font-medium mb-10 text-gray-500 ">
        Hi, I'm Jheyson Alvarez
      </p>
      <div className="flex items-center">
        <div className="w-20 h-8 bg-gray-200"></div>
        <button onClick={scrollToProjects} className="-ml-16 flex gap-2 items-center">
          <p className="text-sm font-semibold leading-[0]">SEE MY PROJECTS</p>
          <MoveRight strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
