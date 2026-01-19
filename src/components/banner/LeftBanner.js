import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.", "DSA Problem solver"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-12 md:gap-20">
      <div className="flex flex-col gap-4 md:gap-5">
        <h4 className="text-base md:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tareq Aziz</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm md:text-base font-bodyFont leading-5 md:leading-6 tracking-wide">
  Passionate MERN Stack Developer and DSA enthusiast specializing in building 
  scalable web applications. I combine modern web technologies with solid 
  programming fundamentals to create efficient, maintainable software solutions. 
  Currently focused on system design and optimizing user experiences through 
  clean architecture and performance-driven development.
</p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner