import React from "react";
import ProjectCard from "./ProjectCard";
import { projectdetails } from "../utils/config";

const Projects = () => {
  return (
    <div>
      <article className="grid   brogrid grid-rows-3">
        {projectdetails.map((ele, index) => (
          <ProjectCard cardData={ele} key={index} />
        ))}
      </article>
    </div>
  );
};

export default Projects;
