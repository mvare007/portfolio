import React from 'react';
import { BsDownload } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import './index.scss';

const Contact = () => {
  return(
    <div className="contact">
      <div className="social">
        <h2>Follow me</h2>
        <a href="https://www.linkedin.com/in/marco-varela-9b8a5a9a"
           target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/mvare007"
           target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      </div>
      <div className="email">
        <h2>Contact</h2>
        <a href="mailto:marco.varela12@gmail.com?subject=I want to hire you ;-)">
        marco.varela12@gmail.com</a>
      </div>
      <div className="cv">
        <span>Download my CV</span>
        <br/>
        <br/>
        <a
          className="link"
          href="https://drive.google.com/file/d/19aKhyCtpa3GLL_1SqiKMyqpaR8OGjYpv/view?usp=sharing"
          target="_blank" rel="noopener noreferrer">
          <BsDownload/></a>
      </div>
    </div>
  );
}

export default Contact;
