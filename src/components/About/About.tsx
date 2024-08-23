import { FC } from 'react';

// Images and other assets
import me from '../../assets/me.png';

const About: FC = () => {
  return (
    <section
      className=" h-fit md:h-screen p-4 flex flex-col items-start
    md:items-center md:flex-row lg:items-start"
    >
      <div className="flex-1">
        <img
          src={me}
          alt="Image of Prince C. Ngumoha"
          className="p-6 h-fit lg:h-[50%] w-fit rounded-[50%] md:rounded-2xl
          border-8 border-dashed border-green-400 object-contain"
        />
      </div>
      <div
        className="md:ml-6 md:pl-4 pt-7 md:h-[50%] lg:h-[80%] flex-1
        flex flex-col justify-around items-center md:items-start font-section"
      >
        <span className="font-bold tracking-wider md:text-lg">Hi 👋🏿</span>
        <span className="mt-5 md:mt-0">
          I'm
          <span className="ml-2 text-xl md:text-2xl font-bold">Prince</span>
        </span>
        <div className="mt-5 md:mt-0 text-xs flex flex-col justify-around">
          <span>
            <strong>Full Name:</strong> <span>Prince Chukwuemeka Ngumoha</span>
          </span>
          <span>
            <strong>Phone:</strong> <span>+2347089699162</span>
          </span>
          <span>
            <strong>Email:</strong> <span>chukwuemekangumoha@gmail.com</span>
          </span>
        </div>
        <span className="mt-5 md:mt-0 text-center md:text-left">
          a full-stack web developer from Nigeria
        </span>
        <div className="mt-5 md:mt-0 flex h-fit flex-row justify-center md:justify-start">
          <a
            href="#"
            className="block px-3 py-4 mr-6 bg-green-400 w-fit
             h-[100%] text-black font-bold font-regular
             tracking-tight rounded-xl"
          >
            Hire Me !!!
          </a>
          <a
            href="#"
            className="block px-3 py-4 bg-transparent w-fit
             h-[100%] text-white font-bold font-regular
             tracking-tight rounded-xl border border-solid border-green-400
             transition-colors duration-700 ease-in-out
             hover:bg-green-400 hover:text-black"
          >
            View My C.V
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
