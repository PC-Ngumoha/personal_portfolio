// external package imports
import { FC } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

// local package imports
import { BorderBeam } from '../magicui/border-beam';

const ProjectCard: FC = () => {
  return (
    <div
      className="relative mt-5 p-3 w-full md:w-[80%] h-[40%] md:h-[60%] mx-auto rounded-xl
      shadow-lg border border-slate-700 flex items-center"
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
        className="flex-1 h-full md:h-[80%] flex flex-col justify-around
      items-center font-regular tracking-wider"
      >
        <span className="font-bold text-lg md:text-2xl lg:text-3xl">
          Project Name
        </span>
        <span className="text-xs md:text-sm">Project Description</span>
        <span className="text-xs font-bold">
          Technologies: <span className="font-normal">HTML, CSS, JS </span>
        </span>
        <div
          className="w-full flex flex-row justify-center px-4
        text-md md:text-xl "
        >
          <a
            href="#"
            className="mr-4 md:mr-8 transition-colors duration-700
            hover:text-green-400"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="mr-4 md:mr-8 transition-colors duration-700
            hover:text-green-400"
          >
            <FaEye />
          </a>

          <a
            href="#"
            className="transition-colors duration-700
            hover:text-green-400"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
