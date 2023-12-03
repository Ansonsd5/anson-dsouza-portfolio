import React from "react";
import ProjectCard from "./ProjectCard";
import { projectdetails } from "../utils/config";
import { PROJECTS_OUTCOMES } from "../utils/textConstant";

const Projects = () => {
  return (
    <div className=" projects relative p-4 font-mono font-[600]">
       <h2 className='text-[24px] leading-10 text-[#169c65]'>Personal Projects</h2>
      <article className="pb-5">
      {PROJECTS_OUTCOMES.HOW_PROJECTS_HELPED_ME}
      </article>
      <article className="grid   brogrid ">
        {projectdetails.map((ele, index) => (
          <ProjectCard cardData={ele} key={index} />
        ))}
      </article>
    </div>
  );
};

export default Projects;
