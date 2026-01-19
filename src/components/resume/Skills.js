import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-20"
    >
      {/* DESIGN & UX SKILLS */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 md:py-12 font-titleFont flex flex-col gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[3px] md:tracking-[4px] uppercase">
            Design & UX
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Design Skills</h2>
        </div>
        <div className="mt-10 md:mt-14 w-full flex flex-col gap-4 md:gap-6">
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">UI/UX Design</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-[85%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-[40%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">40%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">Wireframing</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-[90%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">Responsive Design</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-[95%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">Design Systems</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">75%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* DEVELOPMENT SKILLS */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <div className="py-8 md:py-12 font-titleFont flex flex-col gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[3px] md:tracking-[4px] uppercase">
            Development
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Technical Skills</h2>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">React</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-[90%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">JavaScript & TypeScript</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-[88%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">88%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">Tailwind CSS</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-[95%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">Node.js & Express</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-[85%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">MongoDB</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[82%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">82%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs md:text-sm uppercase font-medium">Git & GitHub</p>
            <span className="w-full h-1.5 md:h-2 bg-gray-700 rounded-md inline-flex mt-1 md:mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-[92%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-md relative"
              >
                <span className="absolute -top-5 md:-top-7 right-0 text-xs md:text-sm">92%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;