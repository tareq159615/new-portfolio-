import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-8 md:gap-10 lg:gap-20"
    >
      <div>
        <div className="py-4 md:py-6 lg:py-12 font-titleFont flex flex-col gap-3 md:gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-4 md:mt-6 lg:mt-14 w-full h-auto md:h-[1000px] border-l-[4px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="Diploma-In-Engineering"
            subTitle="Dhaka Institute of Technology (2021 - 2025)"
            result="3.90/4"
            sub="Computer Science and Technology"
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="Uttara Ideal College (2019 - 2020)"
            result="3.18"
            sub="Business Studies"
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Rupsha Ahmmadia High School (2016 - 2017)"
            result="3.92"
            sub="Business Studies"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education