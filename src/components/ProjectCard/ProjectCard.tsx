// external package imports
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { Modal } from 'react-responsive-modal';

// local package imports
import { BorderBeam } from '../magicui/border-beam';
import { IProject } from '../../lib/types';

/**
 * Implements the UI for a single Project card on the page
 *
 * @param {project: IProject, ...props}
 * @returns <ProjectCard />
 *
 * TODO:
 * - Fix Modal appearance
 * - Possible refactor
 */
const ProjectCard = ({ project, ...props }: { project: IProject }) => {
  const [videoId, setVideoId] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Handles the opening and closing of the modal
  const handleOpenModal = (videoID: string) => {
    setVideoId(videoID);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setVideoId('');
    setOpenModal(false);
  };

  return (
    <>
      <div
        {...props}
        className="relative mt-5 p-3 w-full md:w-[80%] h-[200px] md:h-[250px] lg:h-[400px] mx-auto rounded-xl
      shadow-lg border border-slate-700 flex flex-col justify-center"
      >
        {/* 3rd party special effect from MagicUI */}
        <BorderBeam
          size={400}
          borderWidth={2}
          colorFrom="#4ade80"
          colorTo="#22c55e"
        />

        {/* Project Details */}
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
            <span className="font-normal">
              {project.technologies.join(', ')}
            </span>
          </span>

          {/* Action Buttons For Desktop only */}
          <div
            className="w-full hidden lg:flex flex-row justify-center px-4
        text-md md:text-xl"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener"
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
              onClick={() => handleOpenModal(project.videoID)}
            >
              <FaEye />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener"
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

          {/* Action Links For Smartphones & Tablets */}
          <div
            className="w-full flex flex-col items-center px-4
        text-xs lg:hidden"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener"
              className="text-green-400"
            >
              See On Github
            </a>

            <a
              href="#"
              className="text-green-400"
              onClick={() => handleOpenModal(project.videoID)}
            >
              Watch Demo
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener"
              className="text-green-400"
            >
              Visit Live Website
            </a>
          </div>
        </div>
      </div>

      {/* Modal (external 3rd-party) */}
      {/* TODO: Work on improving Modal appearance or write your own */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        center
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&autoplay=1&mute=1&loop=1&controls=0`}
          className="w-full h-auto object-cover hidden md:block md:flex-1"
        ></iframe>
      </Modal>
    </>
  );
};

export default ProjectCard;
