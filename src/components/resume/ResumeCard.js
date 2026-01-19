import React from 'react'

const ResumeCard = ({title,subTitle,result,sub}) => {
  return (
    <div className="w-full h-auto md:h-1/3 group flex">
      <div className="w-8 h-[4px] md:w-10 md:h-[6px] bgOpacity mt-12 md:mt-16 relative">
        <span className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full -top-1.5 -left-2 md:-top-2 md:-left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 md:p-6 lg:px-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-10 shadow-shadowOne">
        <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-4 lg:gap-0 lg:items-center">
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-xs md:text-sm mt-1 md:mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div className="mt-2 lg:mt-0">
            <p className="px-3 py-1.5 md:px-4 md:py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-xs md:text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-xs md:text-sm lg:text-base bg-black text-designColor group-hover:text-gray-300 duration-300 bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne font-medium py-2 px-3">
          {sub}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard