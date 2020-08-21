import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { DiPostgresql, DiPhotoshop, DiBootstrap } from "react-icons/di";
import { AiFillApi, AiFillGithub } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
import { VscJson } from "react-icons/vsc";

import './index.scss';
import skills from './skills.json';

const Skills = () => {
  const keys = [ 'HTML5', 'CSS', 'Ruby on Rails', 'JavaScript', 'React', 'SQL']
  return (
    <div className="container">
      <div className="mainSkills">
        <h1 className="title">Main Skills:</h1>
        <ResponsiveBar
            data={skills}
            keys={keys}
            indexBy="skill"
            margin={{ top: 50, right: 130, bottom: 50, left: 130 }}
            padding={0.25}
            layout="horizontal"
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            theme={{
                     axis: {
                       ticks: {
                         text: {
                           fontSize: '1rem',
                           fill: "#000"
                         }
                       }
                     }
                   }}
            axisBottom={{
                tickSize: 22,
                tickPadding: 8,
                tickRotation: 0
            }}
            axisLeft={{
                tickSize: 20,
                tickPadding: 30,
                legend: 'Proeficiency Level',
                legendPosition: 'start'
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 8,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.8,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
      </div>
      <div className="otherSkills">
        <h1 className="title">Other Skills:</h1>
        <ul>
          <li><DiPostgresql/>PostgreSQL</li>
          <li><AiFillGithub/>Git</li>
          <li><AiFillApi/>REST</li>
          <li><FcLinux/>Linux</li>
          <li><DiPhotoshop/>Adobe Photoshop</li>
          <li><DiBootstrap/>Bootsrap</li>
          <li>TypeScript</li>
          <li><VscJson/>Json</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;


// 'PostgreSQL', 'REST Api', 'Adobe Photoshop', 'Redux', 'Git', 'Linux', ''
