// external packages
import { FC } from 'react';
import { ReactTyped } from 'react-typed';

// images & other assets
import matrix from '../../assets/matrix.mp4';

const Hero: FC = () => {
  return (
    <section className="h-screen w-full relative">
      <video
        autoPlay={true}
        muted
        loop
        className="h-screen w-full absolute inset-0 object-cover z-[-1]"
      >
        <source
          src={matrix}
          type="video/mp4"
        />
      </video>
      <div
        className="w-full h-full bg-black bg-opacity-50
      flex items-center justify-center"
      >
        <span
          className=" bg-black text-center
        bg-opacity-20 md:bg-opacity-50 text-md font-quote tracking-wide md:text-2xl lg:text-4xl"
        >
          <ReactTyped
            strings={['There is nothing impossible to him who will try']}
            typeSpeed={100}
            cursorChar="<"
            // backDelay={200}
          />
        </span>
      </div>
    </section>
  );
};

export default Hero;
