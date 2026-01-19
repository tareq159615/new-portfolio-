import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-8 pb-16 md:pt-10 md:pb-20 flex flex-col gap-8 md:gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black px-4 sm:px-6 lg:px-8"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner