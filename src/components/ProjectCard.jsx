import React from "react";
import { MoveRight } from "lucide-react";
import { IconBrandReact, IconBrandNextjs, IconBrandTailwind } from "@tabler/icons-react";

const ProjectCard = () => {
  return (
    <div className="relative">
      <div className="absolute z-20 mt-[75px] w-full h-[1px] bg-gray-200"></div>
      <div className="bg-[#F9F9F9] relative z-30 flex flex-col sm:flex-row group max-w-5xl mx-auto">

        <div className="sm:absolute sm:right-0 h-60 w-full sm:w-0 sm:group-hover:w-1/2 lg:group-hover:w-2/5 transition-all duration-200 ease-in-out">
          <div className="relative w-full h-full">
            <div
              className="absolute z-10 top-0 right-0 bg-blue-400 h-[calc(100%-40px)] w-[calc(100%-20px)] sm:w-[calc(100%-100px)]"
              style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)' }}
            ></div>
            <div className="absolute z-0 bottom-0 left-0 bg-black w-[calc(100%-20px)] sm:w-[calc(100%-100px)] h-[calc(50%+20px)] flex items-end">
              <div className="absolute bottom-5 left-5 text-white flex space-x-2">
                <IconBrandReact stroke={2} />
                <IconBrandNextjs stroke={2} />
                <IconBrandTailwind stroke={2} />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:h-60 w-full flex flex-col sm:flex-row p-5 gap-2">
          <div className=" w-full h-full flex items-start pt-10">
            <div className="flex items-center gap-1">
              <p className="text-gray-400">01</p>
              <p className="text-gray-500 text-base sm:text-xl lg:text-3xl font-semibold">Nombre del proyecto</p>
            </div>
          </div>

          <div className="w-full h-full z-50 flex items-center justify-end">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full -mr-5"></div>
              <button className="flex gap-2 items-center">
                <p className="text-sm font-semibold leading-[0]">VIEW PROJECT</p>
                <MoveRight strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
