import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-12 md:py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full h-full flex flex-col gap-6 md:gap-8">
        <div className="flex items-center gap-3">
          <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="logo" />
          <span className="text-xl md:text-2xl font-bold text-white font-mono">TA</span>
        </div>
        <p className="text-gray-400 text-xs md:text-sm">
          Passionate MERN Stack Developer building modern web applications with clean code and scalable architecture.
        </p>
        <div className="flex gap-3 md:gap-4">
          <a 
            href="https://github.com/tareq159615" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon hover:text-designColor transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/tareq-aziz-022392305/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon hover:text-designColor transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://www.facebook.com/bangladesh.bd.com45/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon hover:text-designColor transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://x.com/TareqAziz741" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon hover:text-designColor transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.instagram.com/tareq_aziz741/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon hover:text-designColor transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wider mb-4 md:mb-6">
          Navigation
        </h3>
        <ul className="flex flex-col gap-3 md:gap-4 font-titleFont font-medium py-2 overflow-hidden">
          <li>
            <a 
              href="#about" 
              className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer inline-block"
            >
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer inline-block"
            >
              Skills
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer inline-block"
            >
              Projects
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer inline-block"
            >
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a 
              href="/Tareq Aziz.pdf" 
              target="_blank"
              className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer inline-block"
            >
              Resume
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wider mb-4 md:mb-6">
          Skills & Tech
        </h3>
        <ul className="flex flex-col gap-3 md:gap-4 font-titleFont font-medium py-2 overflow-hidden">
          <li>
            <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              MERN Stack
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              React 
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              TypeScript
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              DSA & System Design
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Tailwind CSS
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wider mb-4 md:mb-6">
          Contact Info
        </h3>
        <ul className="flex flex-col gap-3 md:gap-4 font-titleFont font-medium overflow-hidden py-2">
          <li className="flex items-center gap-3">
            <span className="text-designColor">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <a 
              href="mailto:tareq01829711741@gmail.com" 
              className="text-gray-400 hover:text-designColor duration-300 text-sm md:text-base"
            >
              tareq01829711741@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-designColor">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <a 
              href="tel:+8801829711741" 
              className="text-gray-400 hover:text-designColor duration-300 text-sm md:text-base"
            >
              +880 1829 711741
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-designColor">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-gray-400 text-sm md:text-base">
              Dhaka, Bangladesh
            </span>
          </li>
          <li className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs md:text-sm">
              © {new Date().getFullYear()} Tareq Aziz. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed & Built with React & Tailwind CSS
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer