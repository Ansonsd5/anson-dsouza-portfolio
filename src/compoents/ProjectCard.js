import React from "react";
import { socialLinks } from "../images";

const ProjectCard = (props) => {
  const {
    bannerLink,
    projectName,
    discription,
    techStack,
    githublink,
    liveLink,
  } = props.cardData;

  return (
    <div className="card-wrapper border border-[rgb(208, 215, 222)] max-w-[320px] rounded-[7px]">
      <div className="flex flex-col">
        <img
          src={bannerLink}
          className="mx-auto min-w-[300px] max-h-96  "
          alt="projectbanner"
        />
        <div className="project-text-details p-2 ">
          <div className="project-name text-[#169c65] text-lg">
            {projectName}
          </div>
          <div className="project-discription">{discription}</div>
          <div className="techStack flex flex-wrap">
            <span className="my-underline"> TechStack :</span>{" "}
            {techStack &&
              techStack.map((techStack, index) => (
                <span className="px-1 flex-1 " key={index}>
                  {techStack}
                </span>
              ))}
          </div>
          <div className="links flex gap-2 py-2">
            <div className="gitlink">
              <a href={githublink} target="_blank" rel="noopener noreferrer">
                <img src={socialLinks.githubicon} alt="githubicon" />
              </a>
            </div>
            <div className="redirectlink">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <img src={socialLinks.externallink} alt="redirectlink" />
              </a>
              <img />
            </div>
          </div>
        </div>
      </div>
      <div className="project-name"></div>
    </div>
  );
};

export default ProjectCard;
