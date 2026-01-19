import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from '../../assets';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 md:p-6 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 md:gap-8 justify-center">
       <img
        className="w-full h-48 md:h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-3 md:gap-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Tareq Aziz</h3>
        <p className="text-base md:text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-sm md:text-base text-gray-400 tracking-wide">
          I'm passionate about building scalable web applications with clean code 
          and modern technologies. Currently open to new opportunities and 
          freelance projects.
        </p>
        <p className="text-sm md:text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1829 711741</span>
        </p>
        <p className="text-sm md:text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">tareqaziz01829711741@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-3 md:gap-4">
        <h2 className="text-sm md:text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;