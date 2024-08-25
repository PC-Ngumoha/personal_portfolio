// external package imports
import { FC, useEffect } from 'react';
import AOS from 'aos';

// local package imports
import { IExperience } from '../../lib/types';
import { BorderBeam } from '../magicui/border-beam';

/**
 * Relevant experiences
 */
const featuredExperiences: IExperience[] = [
  {
    id: 1,
    title: 'Software Engineering Diploma',
    institution: 'Holberton School (A.L.X. S.E)',
    start: 'Mar, 2022',
    end: 'Dec, 2023',
    description: 'Twelve month intensive Software Engineering bootcamp.',
  },
  {
    id: 2,
    title: 'Technical Mentor',
    institution: 'Genesys Tech Hub',
    start: 'Mar, 2023',
    end: 'Jul, 2023',
    description: 'I helped many newbee developers get skilled up',
  },
  {
    id: 3,
    title: 'Programming Instructor',
    institution: 'Techxagon Academy',
    start: 'Jan, 2024',
    end: 'May, 2024',
    description:
      'I helped secondary school students across Nigeria gain a start in Tech',
  },
  {
    id: 4,
    title: 'Frontend Developer Intern',
    institution: 'Programmify',
    start: 'Jul, 2024',
    description:
      'Building engaging user interfaces with modern web technologies.',
  },
];

/**
 * Implements Experience section of the page
 * @returns <Experience />
 *
 * TODO
 * - Refactor experience cards into individual components
 */
const Experience: FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="experience"
      className="w-full mt-5 h-fit md:h-screen flex flex-col items-center
    p-2"
      data-aos="flip-down"
      data-aos-easing="ease-in-sine"
      data-aos-delay={300}
      data-aos-duration={1500}
    >
      {/* Section Heading */}
      <h1 className="font-bold text-2xl mt-5 md:mt-0 md:text-3xl font-quote">
        Experience
      </h1>

      {/* List of Featured Experiences */}
      {/* TODO Refactor each experience card into it's own component */}
      <div
        className="w-[95%] h-full grid grid-cols-1 md:grid-cols-2
      gap-6"
      >
        {featuredExperiences.map((experience) => (
          <div
            key={experience.id}
            className="relative mt-4 mb-4 min-h-[200px] p-6 flex flex-col
          justify-around items-start border border-slate-500
          rounded-xl font-regular"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration={1500}
            data-aos-anchor-placement="top-bottom"
          >
            <BorderBeam
              colorFrom="#4ade80"
              colorTo="#22c55e"
            />
            <span
              className="font-bold text-lg md:text-xl lg:text-2xl
            text-green-400"
            >
              {experience.start} - {experience.end ? experience.end : 'Present'}
            </span>
            <span className="font-extrabold text-sm">{experience.title}</span>
            <span className="font-light text-xs tracking-wide text-green-200">
              {experience.institution.toUpperCase()}
            </span>
            <span className="font-normal text-sm italic">
              {experience.description}
            </span>
          </div>
        ))}
      </div>

      {/* View C.V. Button */}
      <a
        href="https://docs.google.com/document/d/1jj6hOtqSLov1DiugJx9UgV6C-AH8uDlLHR5weDSYg4I/edit?usp=sharing"
        target="_blank"
        rel="noopener"
        className="block w-fit h-[50px] rounded-md bg-green-400
        text-black p-3 font-bold font-regular"
        data-aos="zoom-in-right"
        data-aos-easing="ease"
        data-aos-duration={1500}
        data-aos-anchor-placement="left-right"
      >
        View C.V
      </a>
    </section>
  );
};

export default Experience;
