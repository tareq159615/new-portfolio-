
import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4 font-titleFont mb-10 md:mb-14 text-center md:text-left">
      <h3 className="text-xs md:text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title