import React from 'react';
import Typed from 'react-typed';
import TextLoop from "react-text-loop";

import './index.scss';

const profilePic = "https://avatars1.githubusercontent.com/u/58235374?s=460&u=71026b20f119072d052405895f7335cc20d296a0&v=4";

const AboutMe = () => {
  const renderHello = () => {
    const hellos = [ "Hello", "Olá", "Bonjour", "Nǐn hǎo", "Guten Tag",
                     "Namaste","Konnichiwa", "Shalom", "Hola"];
    return (
      <TextLoop interval={3600}>
       {hellos.map(hello => {
          return <span>{hello}</span>
        })}
      </TextLoop>
    );
  }

  const handleClick = (e) => {
    e.target.innerHTML = "My Projects ▼";
    e.target.classList.remove("heartbeat");
  }

  return(
    <div className="profile">
      <div className="intro">
        <img
          className="profilePic"
          src={profilePic}
          alt="Marco"/>
        <h1 className="headline">{renderHello()}!<br/> I'm <strong className="name">Marco Varela</strong>.</h1>
        <h2 className="headline2">I'am a full stack web developer based in Lisbon who is deeply passionate about empowering humans through technology. </h2>
        <Typed
           className="headline3"
           strings={['Thank you for visiting my page :)']}
           typeSpeed={80}/>
        <a href="#projects" className="btn heartbeat" onClick={handleClick}>My Projects ►</a>
      </div>
    </div>
  );
}

export default AboutMe;
