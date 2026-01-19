import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-8 md:py-12 font-titleFont flex gap-8 md:gap-20 flex-col lg:flex-row"
    >
      <div className="w-full">
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-10 md:mt-14 w-full h-auto md:h-[600px] border-l-[4px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="Operation Control Room"
            subTitle="Sundarban Courier Service (Pvt.) - (2019 - 2024)"
            result="Dhaka"
            sub="Tracking vehicles and keeping vehicle information updated to keep them safe and secure in every district of Bangladesh"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;