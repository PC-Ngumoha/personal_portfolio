// external package imports
import { FC } from 'react';

// local package imports
import ProjectCard from '../ProjectCard/ProjectCard';
import { IProject } from '../../lib/types';

const featuredProjects: IProject[] = [
  {
    id: 1,
    name: 'Budget Tracker',
    description: 'A simple budget tracker web application',
    githubUrl: '',
    liveUrl: '',
    videoID: '',
    technologies: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 2,
    name: 'Trafrica',
    description: 'Travel & Tour famous locations on the African continent',
    githubUrl: '',
    liveUrl: '',
    videoID: '',
    technologies: ['React.js', 'CSS', 'HTML', 'JS'],
  },
  {
    id: 3,
    name: 'Inkspire',
    description: "Get access to the world's knowledge at Inkspire",
    githubUrl: '',
    liveUrl: '',
    videoID: '',
    technologies: ['HTML', 'CSS', 'JS'],
  },
];

const Projects: FC = () => {
  return (
    <section
      className="w-full h-fit flex flex-col items-center
    p-2"
    >
      <h1 className="font-bold text-2xl mt-5 md:mt-0 md:text-3xl font-quote">
        Projects
      </h1>

      {featuredProjects.map((project: IProject) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};

export default Projects;
