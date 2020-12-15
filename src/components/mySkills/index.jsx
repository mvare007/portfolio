import React from "react";
import Bounce from "react-reveal/Bounce";
import {
  DiPostgresql,
  DiPhotoshop,
  DiBootstrap,
  DiSass,
  DiCss3,
  DiResponsive,
} from "react-icons/di";
import { AiFillApi, AiFillHtml5 } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import {
  SiJava,
  SiRedux,
  SiRails,
  SiJavascript,
  SiReact,
  SiMysql,
  SiRuby,
} from "react-icons/si";
import "./index.scss";

const Skills = () => {
 return (
   <div className="container">
     <Bounce left>
       <div className="skills">
         <h1 className="title">Main Skills</h1>
         <ul>
           <li>
             <SiRuby />
             <span>Ruby</span>
           </li>
           <li>
             <SiRails />
             <span>Ruby on Rails</span>
           </li>
           <li>
             <SiJavascript />
             <span>JavaScript</span>
           </li>
           <li>
             <SiReact />
             <span>React</span>
           </li>
           <li>
             <SiJava />
             <span>Java</span>
           </li>
           <li>
             <SiMysql />
             <span>mySQL</span>
           </li>
           <li>
             <AiFillHtml5 />
             <span>HTML5</span>
           </li>
           <li>
             <DiCss3 />
             <span>CSS</span>
           </li>
         </ul>
       </div>
     </Bounce>
     <Bounce right>
       <div className="skills" id="pink">
         <h1 className="title">Other Skills</h1>
         <ul>
           <li>
             <SiRedux />
             <span>Redux</span>
           </li>
           <li>
             <DiPostgresql />
             <span>PostgreSQL</span>
           </li>
           <li>
             <AiFillApi />
             <span>REST API</span>
           </li>
           <li>
             <BiCodeCurly />
             <span>JSON</span>
           </li>
           <li>
             <DiBootstrap />
             <span>Bootstrap</span>
           </li>
           <li>
             <DiSass />
             <span>Sass</span>
           </li>
           <li>
             <DiResponsive />
             <span>Responsive Design</span>
           </li>
           <li>
             <DiPhotoshop />
             <span>Adobe Photoshop</span>
           </li>
         </ul>
       </div>
     </Bounce>
   </div>
 );
};

export default Skills;
