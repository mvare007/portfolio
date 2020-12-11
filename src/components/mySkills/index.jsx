import React from "react";
import Bounce from "react-reveal/Bounce";
import { ResponsiveBar } from "@nivo/bar";
import { DiPostgresql, DiPhotoshop, DiBootstrap, DiSass } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { SiJava, SiRedux } from "react-icons/si";

import "./index.scss";
import skills from "./skills.json";

const Skills = () => {
  const keys = ["HTML5", "CSS", "Ruby on Rails", "JavaScript", "React", "SQL"];
  return (
    <div className="container">
      <Bounce left>
        <div className="mainSkills">
          <h1 className="title">Main Skills</h1>
          <ResponsiveBar
            data={skills}
            keys={keys}
            indexBy="skill"
            margin={{ top: 20, right: 130, bottom: 50, left: 120 }}
            padding={0.4}
            layout="horizontal"
            colors={{ scheme: "set3" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fontSize:
                      "calc(13px + (27 - 14) * ((100vw - 1000px) / (1600 - 300)))",
                    fill: "#000",
                  },
                },
              },
            }}
            axisBottom={{
              tickSize: 8,
              tickPadding: 8,
            }}
            axisLeft={{
              tickSize: 8,
              tickPadding: 6,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 8,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.8,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                      symbolSize: 22,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </Bounce>
      <Bounce right>
        <div className="otherSkills">
          <h1 className="title">Other Skills</h1>
          <ul>
            <li>
              <SiJava />
              <span>Java</span>
            </li>
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
              <DiPhotoshop />
              <span>Adobe Photoshop</span>
            </li>
            <li>
              <DiBootstrap />
              <span>Bootstrap</span>
            </li>
            <li>
              <DiSass />
              <span>Sass</span>
            </li>
          </ul>
        </div>
      </Bounce>
    </div>
  );
};

export default Skills;
