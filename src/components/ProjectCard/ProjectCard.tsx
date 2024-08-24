// external package imports
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

// local package imports
import { BorderBeam } from '../magicui/border-beam';
import { IProject } from '../../lib/types';

const ProjectCard = ({ project, ...props }: { project: IProject }) => {
  return (
    <div
      {...props}
      className="relative mt-5 p-3 w-full md:w-[80%] h-[200px] md:h-[250px] lg:h-[400px] mx-auto rounded-xl
      shadow-lg border border-slate-700 flex flex-col justify-center"
    >
      <BorderBeam
        size={400}
        borderWidth={2}
        colorFrom="#4ade80"
        colorTo="#22c55e"
      />

      {/* <iframe
        src="https://www.youtube.com/embed/-QC9ct5DB3g?playlist=-QC9ct5DB3g&autoplay=1&mute=1&loop=1&controls=0"
        className="w-fit h-fit object-cover hidden md:block md:flex-1"
      ></iframe> */}

      <div
        className="flex-1 h-full md:h-[80%] flex flex-col
       justify-around items-center font-regular tracking-wider"
      >
        <span className="font-bold text-lg md:text-2xl lg:text-3xl">
          {project.name}
        </span>
        <span className="text-xs md:text-sm">{project.description}</span>
        <span className="text-xs font-bold">
          Technologies:{' '}
          <span className="font-normal">{project.technologies.join(', ')}</span>
        </span>
        <div
          className="w-full hidden lg:flex flex-row justify-center px-4
        text-md md:text-xl"
        >
          <a
            href="#"
            data-tooltip-id="link-tooltip"
            data-tooltip-content="See On Github"
            data-tooltip-place="left"
            className="mr-4 md:mr-8 transition-colors duration-700
            hover:text-green-400"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Watch Demo"
            data-tooltip-place="top"
            className="mr-4 md:mr-8 transition-colors duration-700
            hover:text-green-400"
          >
            <FaEye />
          </a>

          <a
            href="#"
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Visit Live Website"
            data-tooltip-place="right"
            className="transition-colors duration-700
            hover:text-green-400"
          >
            <FaExternalLinkAlt />
          </a>
          <Tooltip id="link-tooltip" />
        </div>
        <div
          className="w-full flex flex-col items-center px-4
        text-xs lg:hidden"
        >
          <a
            href="#"
            className="text-green-400"
          >
            See On Github
          </a>

          <a
            href="#"
            className="text-green-400"
          >
            Watch Demo
          </a>

          <a
            href="#"
            className="text-green-400"
          >
            Visit Live Website
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectCard;
