import React from "react";
import ProjectCard from "./ProjectCard";
import { projectdetails } from "../utils/config";
import { PROJECTS_OUTCOMES } from "../utils/textConstant";

const Projects = () => {
  return (
    <div className="mt-4 projects relative p-4 font-mono font-[600] mb-[18px]">
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
