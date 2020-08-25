import React from 'react';

import './index.scss';
import projects from './projects.json';
import Project from'../project';

const ProjectList = () => {
  return(
    <div>
      <div className="projects">
        {projects.map(project => {
          return <Project
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  demo={project.demo}
                  code={project.code}/>
        })}
      </div>
    </div>
  );
}

export default ProjectList;