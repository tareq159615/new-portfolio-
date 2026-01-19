import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  // Close mobile menu when clicking outside
  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  // Try multiple paths for the resume
  // const resumePaths = [
  //   '/Tareq_Aziz_Resume.pdf',
  //   '/Tareq Aziz.pdf',
  //   `${process.env.PUBLIC_URL}/Tareq_Aziz_Resume.pdf`,
  //   `${process.env.PUBLIC_URL}/Tareq Aziz.pdf`
  // ];

  return (
    <div className="w-full h-16 md:h-20 lg:h-24 sticky top-0 z-50 bg-bodyColor/90 backdrop-blur-sm mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo"  />
        {/* <div className="hidden md:flex flex-col">
          <span className="text-lg font-bold text-white font-mono">Tareq Aziz</span>
          <span className="text-xs text-gray-400">MERN Stack Developer</span>
        </div> */}
      </div>
      
      {/* Desktop Navigation */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-4 md:gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-sm md:text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 group"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative"
              >
                {title}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-designColor group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
          <li>
            <a 
              href="/Tareq_Aziz_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm md:text-base font-normal text-designColor border border-designColor px-4 py-2 rounded hover:bg-designColor hover:text-bodyColor transition-colors duration-300"
              onClick={(e) => {
                // Test if file exists
                fetch('/Tareq_Aziz_Resume.pdf')
                  .then(response => {
                    if (!response.ok) {
                      console.warn('Resume not found at /Tareq_Aziz_Resume.pdf');
                      // Optionally redirect to another location
                    }
                  })
                  .catch(error => {
                    console.warn('Error loading resume:', error);
                  });
              }}
            >
              Resume
            </a>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-gray-800 w-10 h-10 md:w-12 md:h-12 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer hover:bg-gray-700 transition-colors duration-300"
        >
          <FiMenu />
        </span>
        
        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-[85%] sm:w-[70%] h-screen overflow-y-auto fixed top-0 left-0 bg-gray-900/95 backdrop-blur-md p-6 scrollbar-hide z-50">
            <div className="flex flex-col gap-8 py-4 relative">
              {/* Header Section */}
              <div className="flex flex-col items-center text-center">
                <img className="w-28 md:w-32 rounded-lg mb-4" src={logo} alt="logo" />
                <h3 className="text-xl font-bold text-white mb-2">Tareq Aziz</h3>
                <p className="text-sm text-gray-400 mb-1">MERN Stack Developer</p>
                <p className="text-xs text-gray-500 mt-2">
                  Passionate about building scalable web applications with clean code and modern technologies.
                </p>
              </div>
              
              {/* Navigation Links */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 border-b border-gray-800 pb-3"
                  >
                    <Link
                      onClick={handleCloseMenu}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="flex items-center gap-3"
                    >
                      <span className="text-designColor text-sm">›</span>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-gray-800 pb-3">
                  <a 
                    href="/Tareq_Aziz_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    className="text-base font-normal text-designColor flex items-center gap-3"
                  >
                    <span className="text-designColor text-sm">›</span>
                    Resume
                  </a>
                </li>
              </ul>
              
              {/* Social Links */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-2 text-gray-300">
                  Connect With Me
                </h2>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://github.com/tareq159615" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    className="bannerIcon hover:text-designColor hover:border-designColor transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tareq-aziz-022392305/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    className="bannerIcon hover:text-designColor hover:border-designColor transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href="https://www.facebook.com/bangladesh.bd.com45/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    className="bannerIcon hover:text-designColor hover:border-designColor transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://x.com/TareqAziz741" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    className="bannerIcon hover:text-designColor hover:border-designColor transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="https://www.instagram.com/tareq_aziz741/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    className="bannerIcon hover:text-designColor hover:border-designColor transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-designColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:tareqaziz01829711741@gmail.com" className="hover:text-designColor transition-colors">
                      tareqaziz01829711741@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-designColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+8801829711741" className="hover:text-designColor transition-colors">
                      +880 1829 711741
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <span
                onClick={handleCloseMenu}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer bg-gray-800 rounded-full p-2"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;