// external package imports
import { FC } from 'react';
import { FaHtml5, FaCss3, FaReact, FaNode, FaLinux } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';

// local package imports
import { ISkills } from '../../lib/types';
import { BorderBeam } from '../magicui/border-beam';

/**
 *
 * Languages & Frameworks that I know how to use within the MERN stack
 * - Frontend: HTML 5, CSS 3, JavaScript, TypeScript, React,
 * - Backend:  Node, MongoDB, MySQL, Express
 * - DevOps: Linux, Docker,
 */

const featuredSkills: ISkills[] = [
  {
    id: 1,
    icon: FaHtml5,
    tip: 'HTML 5',
  },
  {
    id: 2,
    icon: FaCss3,
    tip: 'CSS 3',
  },
  {
    id: 3,
    icon: IoLogoJavascript,
    tip: 'JavaScript',
  },
  {
    id: 4,
    icon: SiTypescript,
    tip: 'TypeScript',
  },
  {
    id: 5,
    icon: FaReact,
    tip: 'React',
  },
  {
    id: 6,
    icon: FaNode,
    tip: 'Node.js',
  },
  {
    id: 7,
    icon: SiExpress,
    tip: 'Express.js',
  },
  {
    id: 8,
    icon: SiMongodb,
    tip: 'Mongo DB',
  },
  {
    id: 9,
    icon: SiMysql,
    tip: 'MySQL',
  },
  {
    id: 10,
    icon: FaLinux,
    tip: 'Linux',
  },
];

/**
 * Implements the Skills section on the page
 * @returns <Skills />
 *
 * TODO:
 * - Fix strange flickering effect observed on the page
 * - Refactor Skills card into seperate component
 */
const Skills: FC = () => {
  return (
    <section
      id="skills"
      className="w-full mt-5 h-fit md:h-screen flex flex-col items-center
    p-2"
    >
      <h1 className="font-bold text-2xl mt-5 md:mt-0 md:text-3xl font-quote">
        Skills
      </h1>

      <div
        className="mt-4 w-[80%] h-full grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 gap-8"
      >
        {/* List of all my Featured Skills */}
        {/* TODO Refactor cards into individual components */}
        {featuredSkills.map((skill, idx) =>
          idx === featuredSkills.length - 1 ? (
            <div
              key={skill.id}
              className="relative flex justify-center items-center
            min-h-[100px] border border-slate-500 rounded-xl
            lg:col-span-full shadow"
            >
              <BorderBeam
                colorFrom="#4ade80"
                colorTo="#22c55e"
              />
              {/* Render icon component dynamically */}
              <a
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.tip}
                data-tooltip-place="bottom"
              >
                <skill.icon className="font-bold text-3xl md:text-4xl lg:text-6xl" />
              </a>
            </div>
          ) : (
            <div
              key={skill.id}
              className="relative flex justify-center items-center
            min-h-[100px] border border-slate-500 rounded-xl"
            >
              <BorderBeam
                colorFrom="#4ade80"
                colorTo="#22c55e"
              />
              {/* Render icon component dynamically */}
              <a
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.tip}
                data-tooltip-place="bottom"
              >
                <skill.icon className="font-bold text-3xl md:text-4xl lg:text-6xl" />
              </a>
            </div>
          )
        )}
      </div>
      <Tooltip id="skill-tooltip" />
    </section>
  );
};

export default Skills;
