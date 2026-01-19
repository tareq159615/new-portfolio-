
import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,des,icon}}) => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-12 h-64 md:h-72 lg:h-80 py-8 md:py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-56 md:h-64 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 md:gap-8 lg:gap-10 translate-y-12 md:translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-8 h-6 md:w-10 md:h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl md:text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm md:text-base">{des}</p>
            <span className="text-xl md:text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card