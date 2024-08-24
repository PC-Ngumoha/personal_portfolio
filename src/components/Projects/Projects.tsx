// external package imports
import { FC } from 'react';

// local package imports
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects: FC = () => {
  return (
    <section
      className="w-full h-screen flex flex-col items-center
    p-2"
    >
      <h1 className="font-bold text-2xl mt-5 md:mt-0 md:text-3xl font-quote">
        Projects
      </h1>

      <ProjectCard />
    </section>
  );
};

export default Projects;
