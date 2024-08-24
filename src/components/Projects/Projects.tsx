// external package imports
import { FC } from 'react';

// local package imports
import ProjectCard from '../ProjectCard/ProjectCard';
import { IProject } from '../../lib/types';

const featuredProjects: IProject[] = [
  {
    id: 1,
    name: 'Budget Tracker',
    description: 'A simple budget tracker',
    githubUrl: 'https://github.com/PC-Ngumoha/personal_budget_tracker',
    liveUrl:
      'https://personalbudgettracker-r8eukt96q-pcngumohas-projects.vercel.app/',
    videoID: '-QC9ct5DB3g',
    technologies: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 2,
    name: 'Trafrica',
    description: 'Travel & Tour famous locations on the African continent',
    githubUrl: 'https://github.com/PC-Ngumoha/trafrica',
    liveUrl: 'https://trafrica.vercel.app/',
    videoID: 'AGUu_yxFdiU',
    technologies: ['React.js', 'CSS', 'HTML', 'JS'],
  },
  {
    id: 3,
    name: 'Inkspire',
    description: "Get access to the world's knowledge at Inkspire",
    githubUrl: 'https://github.com/PC-Ngumoha/inkspire',
    liveUrl: 'https://inkspire-three.vercel.app/',
    videoID: 'dymKHLgzDhE',
    technologies: ['HTML', 'CSS', 'JS'],
  },
];

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="w-full h-fit flex flex-col items-center
    p-2"
    >
      <h1 className="font-bold text-2xl mt-5 md:mt-0 md:text-3xl font-quote">
        Projects
      </h1>

      {featuredProjects.map((project: IProject) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
};

export default Projects;
