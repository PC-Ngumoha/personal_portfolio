import { IconType } from 'react-icons';

export interface IProject {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  videoID: string;
  liveUrl: string;
}

export interface ISkills {
  id: number;
  icon: IconType;
  tip: string;
}
