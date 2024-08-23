import { FC } from 'react';

// Images and other assets
import me from '../../assets/me.png';

const About: FC = () => {
  return (
    <section className="h-screen p-2 flex flex-col items-center md:flex-row md:items-start">
      <div className="flex-1">
        <img
          src={me}
          alt="Image of Prince C. Ngumoha"
          className="h-[50%] w-fit"
        />
      </div>
      <div className="flex-1">
        <span>Hello !</span>
        <span>
          I'm
          <span>Prince C. Ngumoha</span>
        </span>
        <span>a full-stack web developer</span>
        <div>
          <a href="#">Hire Me !!!</a>
          <a href="#">Download My C.V</a>
        </div>
      </div>
    </section>
  );
};

export default About;
