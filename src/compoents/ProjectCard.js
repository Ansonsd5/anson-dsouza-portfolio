import React from "react";
import { socialLinks } from "../images";

const ProjectCard = (props) => {
  const { bannerLink, projectName, discription } = props.cardData;

  return (
    <div className="card-wrapper border border-red-600 mx-2 max-w-[320px]">
      <div className="flex flex-col">
        <img src={bannerLink} className="mx-auto min-w-[300px] max-h-96 " />
        <div className="project-text-details mx-auto ">
          <div className="project-name">{projectName}</div>
          <div className="project-discription">{discription}</div>
          <div className="links flex gap-2 py-2">
            <div className="gitlink">
              <img src={socialLinks.githubicon} />
            </div>
            <div className="redirectlink">
              <img src={socialLinks.externallink} />
            </div>
          </div>
        </div>
      </div>
      <div className="project-name"></div>
    </div>
  );
};

export default ProjectCard;
