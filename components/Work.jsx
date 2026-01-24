import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Featured Projects</h2>
      <p className="mb-12 max-w-2xl mx-auto mt-5 text-center font-Ovo">
        Explore my portfolio showcasing 3+ years of experience in Full-Stack, 
        Mobile, and Enterprise application development across various domains.
      </p>
      
      {/* Enterprise Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-Ovo mb-8 text-center dark:text-white">Enterprise Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {workData.enterprise.map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-video bg-no-repeat bg-center bg-cover rounded-xl relative cursor-pointer overflow-hidden border border-gray-300 dark:border-gray-700"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
              
                {/* Confidential Badge */}
                {project.confidential && (
                  <div className="absolute top-3 left-3 bg-amber-500/90 text-white text-xs px-2 py-1 rounded-full">
                    Confidential
                  </div>
                )}
                
                {/* Project Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
                {project.role && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Role: {project.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Applications */}
      {/* <div className="mb-16">
        <h3 className="text-2xl font-Ovo mb-8 text-center dark:text-white">Mobile Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {workData.mobile.map((project, index) => (
            <a href={project.url} key={index} target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-[3/4] bg-no-repeat bg-center bg-cover rounded-xl relative cursor-pointer overflow-hidden border border-gray-300 dark:border-gray-700"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="absolute inset-4 rounded-[20px] overflow-hidden">
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      📱
                    </div>
                    <span className="text-white font-semibold">Mobile App</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-white">
                    <span>View Project</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div> */}
      
      {/* Personal Projects */}
      <div>
        <h3 className="text-2xl font-Ovo mb-8 text-center dark:text-white">Personal Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {workData.personal.map((project, index) => (
            <a href={project.url} key={index} target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-video bg-no-repeat bg-center bg-cover rounded-xl relative cursor-pointer overflow-hidden border border-gray-300 dark:border-gray-700"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  {project.github && (
                    <div className="flex items-center gap-2 text-white">
                      <span>View</span>
                      <span>→</span>
                    </div>
                  )}
                </div>
              </div>
              {/* <div className="mt-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
                {project.github && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <Image  src={assets.github_icon } alt="GitHub" className="w-4 h-4" />
                    <span>Source code available</span>
                  </div>
                )}
              </div> */}
            </a>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <a
        href="#contact"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Get In Touch For More Details
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt=""
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;