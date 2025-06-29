import myImage from "../../assets/unnamed.jpg";
import { FaTwitter, FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="bg-[#0f172a] text-white flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-12 pt-28 pb-16  ">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl space-y-4">
        <p className="text-lg">Hello, It's Me</p>
        <h1 className="text-4xl font-bold">AL AMIN</h1>
        <h2 className="text-2xl font-semibold">
          I'm a{" "}
          <span className="text-cyan-400">
            <Typewriter
              words={[
                "Frontend Developer",
                "Lifelong Learner",
                "Creative Coder",
              ]}
              loop={0} // infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-sm text-gray-300 max-w-md mx-auto md:mx-0">
          Passionate frontend developer skilled in React, Tailwind, and
          JavaScript. I love crafting modern web experiences and continuously
          learning new technologies.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-cyan-400 text-2xl">
          <a
            href="https://github.com/malamin59"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="cursor-pointer hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="cursor-pointer hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="cursor-pointer hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="https://drive.google.com/file/d/1D7gSmHh99yNjTtEo0_yffeR43OiaXZMc/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-500 transition duration-300"
        >
          <FaDownload />
          Download CV
        </a>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="rounded-full bg-cyan-400 p-[3px] shadow-xl">
          <img
            src={myImage}
            alt="Al Amin - Frontend Developer"
            className="rounded-full w-65 h-65 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
