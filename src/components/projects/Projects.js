import React from 'react'
import Title from '../layouts/Title'
import {   
  projectOne, 
  projectTwo, 
  projectThree,
  projectFour,
  projectFive,
  projectSix 
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-20 border-b-[1px] border-b-black px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="EXPLORE MY PORTFOLIO AND SHARE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-14">
        <ProjectsCard
          title="Book Club - MERN Full-Stack Platform"
          des="Full-stack CRUD application with role-based access, membership management, and admin dashboard. Built with React, Node.js, Express, MongoDB."
          src={projectOne}
          githubLink="https://github.com/tareq159615/Book-Management-app-frontend"
          liveLink="https://book-management-app-frontend-chi.vercel.app/"
        />
        <ProjectsCard
          title="AI Virtual Assistant"
          des="JARVIS-like AI assistant with voice control using Web Speech API and Gemini AI. Features JWT auth, user profiles, and Cloudinary integration."
          src={projectTwo}
          githubLink="https://github.com/tareq159615/Virtual-Assistant"
          liveLink="https://virtual-assistant-lpfc.onrender.com"
        />
        <ProjectsCard
          title="E-commerce with Advanced Filtering"
          des="Modern e-commerce platform with dynamic filtering, cart management, and responsive design using React, Zustand, and Tailwind CSS."
          src={projectThree}
          githubLink="https://github.com/tareq159615/E-Commerce-Advance-Filteringsrc"
          liveLink="https://reliable-vacherin-78a9d8.netlify.app/"
        />
        <ProjectsCard
          title="Advanced Task List App"
          des="Task management application with React and Zustand for global state. Features adding, editing, deleting, and filtering tasks with clean UI."
          src={projectFour}
          githubLink="https://github.com/tareq159615/Advance-Task-List-App"
          liveLink="https://advance-task-list-app.vercel.app/"
        />
        <ProjectsCard
          title="Recipe Book App"
          des="Dynamic recipe application with bookmarking, filtering, and search functionality. Built with React, Zustand, and modern UI components."
          src={projectFive}
          githubLink="https://github.com/tareq159615/Recipe-App"
          liveLink="https://recipe-app-liard-phi.vercel.app/"
        />
        <ProjectsCard
          title="Form Builder"
          des="Customizable form builder allowing users to create and manage dynamic forms with drag-and-drop interface and validation."
          src={projectSix}
          githubLink="https://github.com/tareq159615/Form-Builder-"
          liveLink="https://form-builder-5yla.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects;