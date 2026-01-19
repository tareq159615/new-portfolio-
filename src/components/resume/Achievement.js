import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-8 md:py-12 font-titleFont flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-20"
    >
      {/* ACHIEVEMENTS SECTION */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 md:py-12 font-titleFont flex flex-col gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[4px]">ACHIEVEMENTS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Certifications & Awards</h2>
        </div>
        <div className="mt-10 md:mt-14 w-full border-l-[4px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="C# Certification - Microsoft & freeCodeCamp"
            subTitle="Foundational C# with Microsoft (2023)"
            result="Certified"
            des="Completed comprehensive C# programming course covering fundamentals, object-oriented programming, and .NET framework from Microsoft through freeCodeCamp platform."
          />
          <ResumeCard
            title="SQL (Basic) Certification"
            subTitle="HackerRank SQL Certification (2023)"
            result="Top 10%"
            des="Earned SQL certification demonstrating proficiency in database queries, joins, aggregations, and data manipulation with relational databases."
          />
          <ResumeCard
            title="LeetCode Problem Solving"
            subTitle="200+ Problems Solved (2022 - Present)"
            result="Top 25%"
            des="Consistently solving algorithmic challenges, ranking in top 25% globally. Strong foundation in data structures, algorithms, and optimization techniques."
          />
          <ResumeCard
            title="Full-Stack Web Development"
            subTitle="Programming Hero Bootcamp (2023)"
            result="Completed"
            des="Completed intensive bootcamp covering modern web development technologies including React, Node.js, MongoDB, and deployment strategies."
          />
        </div>
      </div>
      
      {/* PROJECTS & CONTRIBUTIONS */}
      <div className="w-full lg:w-1/2 mt-8 md:mt-0">
        <div className="py-8 md:py-12 font-titleFont flex flex-col gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[4px]">NOTABLE PROJECTS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Key Accomplishments</h2>
        </div>
        <div className="mt-10 md:mt-14 w-full border-l-[4px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="Book Club - Full Stack Platform"
            subTitle="MERN Stack Application (2024)"
            result="Featured"
            des="Built complete membership management system with admin dashboard, role-based access, and payment integration. Deployed with full CI/CD pipeline."
          />
          <ResumeCard
            title="AI Virtual Assistant"
            subTitle="Voice-Controlled AI Application (2024)"
            result="Innovative"
            des="Developed JARVIS-like AI assistant with Web Speech API and Gemini AI integration. Implemented JWT authentication and Cloudinary for media storage."
          />
          <ResumeCard
            title="10+ Production-Ready Projects"
            subTitle="Personal Portfolio (2022-2024)"
            result="Success"
            des="Created and deployed multiple full-stack applications showcasing different technologies, from e-commerce to task management systems."
          />
          <ResumeCard
            title="GitHub Open Source"
            subTitle="Code Repository & Contributions (2022-Present)"
            result="Active"
            des="Maintained organized GitHub with 20+ repositories featuring clean code, documentation, and project showcases. Regular contributions and version control."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;