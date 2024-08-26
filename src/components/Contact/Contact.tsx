import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="mt-5 h-fit md:h-screen w-full p-10 flex flex-col md:flex-row"
    >
      <div
        className="flex-1 py-4 px-3 flex flex-col justify-start
       font-bold text-center md:text-left"
      >
        <span
          className="mt-6 text-xl md:text-2xl lg:text-4xl
        font-section"
        >
          Contact Me
        </span>
        <span className="mt-6 text-xs md:text-sm">
          Let's work together on something awesome 🔥🔥
        </span>
      </div>
      <form
        className="flex-1 flex flex-col justify-around"
        action="https://formsubmit.co/a9c1571d9cadb208dcbb23f9e73387d1"
        method="POST"
        target="_blank"
      >
        <legend className="font-bold font-regular text-xl mb-10 md:mb-0">
          Send me a message
        </legend>
        <input
          className="contact-input-field"
          type="text"
          name="name"
          placeholder="Enter name"
          aria-label="name"
          role="input"
          required
        />
        <input
          className="contact-input-field"
          type="email"
          name="email"
          placeholder="Email addresss"
          aria-label="email"
          role="input"
          required
        />
        <input
          type="hidden"
          name="_subject"
          value="New Request"
        />
        <input
          type="hidden"
          name="_captcha"
          value="false"
        />
        <textarea
          className="contact-input-field h-[300px]"
          name="message"
          placeholder="Enter details of project"
        ></textarea>
        <button
          className="font-bold text-md md:text-lg lg:text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
