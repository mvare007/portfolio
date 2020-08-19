import React from 'react';

import './index.scss';

const Project = ({name, description, image, demo, code}) => {
  return (
    <div className="card-item">
      <div className="card-image">
        <img src={image} alt="x"/>
      </div>
      <div className="card-info">
        <h2 className="card-title">{name}</h2>
        <p className="card-intro">{description}</p>
      </div>
      <div>
        <a href={code}>Code</a>
        <a href={demo}>Demo</a>
      </div>
    </div>
  );
}

export default Project;
