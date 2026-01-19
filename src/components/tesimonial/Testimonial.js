import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import {  quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10 hover:text-designColor"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10 hover:text-designColor"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow />,
    prevArrow:<SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "#2a2e35",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  
  const testimonials = [
    {
      id: 1,
      name: "Book Club Platform",
      role: "MERN Full-Stack Project",
      rating: 5,
      project: "Book Club — MERN Full-Stack CRUD & Membership Platform",
      date: "Dec 2023 - Jan 2024",
      feedback: "Tareq developed a comprehensive book management system with role-based access control. The admin dashboard with sales analytics was particularly impressive. The application is scalable and follows clean code architecture.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://book-management-app-frontend-chi.vercel.app/"
    },
    {
      id: 2,
      name: "AI Virtual Assistant",
      role: "AI Integration Project",
      rating: 5,
      project: "JARVIS-like AI Assistant",
      date: "Nov 2023 - Dec 2023",
      feedback: "The voice-controlled AI assistant integrated with Gemini AI was a complex project that Tareq handled exceptionally well. The implementation of Web Speech API and secure authentication was seamless. The deployment on Render was smooth.",
      technologies: ["React", "Gemini AI", "Web Speech API", "JWT", "Cloudinary"],
      link: "https://virtual-assistant-lpfc.onrender.com"
    },
    {
      id: 3,
      name: "E-commerce Platform",
      role: "Advanced Frontend Project",
      rating: 5,
      project: "E-commerce with Advanced Filtering",
      date: "Oct 2023 - Nov 2023",
      feedback: "Tareq implemented sophisticated product filtering, cart management, and dynamic routing in this React e-commerce application. The performance optimization and responsive design made for an excellent user experience.",
      technologies: ["React", "Zustand", "React Router", "Tailwind CSS"],
      link: "https://reliable-vacherin-78a9d8.netlify.app/"
    }
  ];

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-800"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title title="PROJECT FEEDBACK" des="Client Testimonials" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full px-2">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
                {/* Left Profile Section */}
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne border border-gray-800 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-designColor to-blue-600 p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Project Feedback
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-base tracking-wide text-gray-400 mb-4">
                      {testimonial.role}
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <a 
                      href={testimonial.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-designColor hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </div>

                {/* Right Content Section */}
                <div className="w-full lgl:w-[60%] h-full flex flex-col">
                  <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 lgl:p-8 border border-gray-800">
                    <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-800">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-bold text-white mb-2">
                          {testimonial.project}
                        </h3>
                        <p className="text-sm text-designColor">
                          {testimonial.date}
                        </p>
                      </div>
                      <img className="w-12 h-12 opacity-50" src={quote} alt="quote" />
                    </div>
                    
                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                      "{testimonial.feedback}"
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm uppercase text-gray-400 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                      <div className="text-yellow-500 flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <RiStarFill key={i} />
                        ))}
                      </div>
                      <a 
                        href={testimonial.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-designColor hover:text-white transition-colors duration-300 flex items-center gap-2"
                      >
                        Visit Live Project
                        <HiArrowRight className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add a testimonial for your skills */}
          <div className="w-full px-2">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne border border-gray-800 flex flex-col items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 mb-6">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">D</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Technical Skills Feedback
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    DSA & System Design
                  </h3>
                  <p className="text-base tracking-wide text-gray-400 mb-4">
                    Code Reviewer
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    <RiStarFill className="text-yellow-500" />
                    <RiStarFill className="text-yellow-500" />
                    <RiStarFill className="text-yellow-500" />
                    <RiStarFill className="text-yellow-500" />
                    <RiStarFill className="text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="w-full lgl:w-[60%] h-full flex flex-col">
                <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 lgl:p-8 border border-gray-800">
                  <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-800">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-bold text-white mb-2">
                        Problem Solving & System Design
                      </h3>
                      <p className="text-sm text-designColor">
                        Ongoing Development
                      </p>
                    </div>
                    <img className="w-12 h-12 opacity-50" src={quote} alt="quote" />
                  </div>
                  
                  <p className="text-base text-gray-300 leading-relaxed mb-6">
                    "Tareq demonstrates strong analytical skills in problem-solving with a solid grasp of Data Structures & Algorithms. His approach to Low-Level Design (LLD) shows understanding of SOLID principles and design patterns. The implementation of state management solutions using Zustand in his projects reflects practical application of software architecture concepts."
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-400 mb-3">Key Strengths:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700">Algorithm Optimization</span>
                      <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700">Clean Architecture</span>
                      <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700">SOLID Principles</span>
                      <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700">State Management</span>
                      <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700">System Design</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                    <a 
                      href="https://github.com/tareq159615/LLD" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-designColor hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      View LLD Projects
                      <HiArrowRight className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;