import React from "react";
import Fade from "react-reveal/Fade";

import "./index.scss";
import projects from "./projects.json";
import Project from "../project";

const ProjectList = () => {
  return (
    <div>
      <div>
        <Fade top big>
          <div className="projects">
            {projects.map((project) => {
              return (
                <Project
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  demo={project.demo}
                  code={project.code}
                />
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProjectList;
