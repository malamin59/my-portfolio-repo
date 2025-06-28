import myImage from "../../assets/unnamed.jpg";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="bg-[#0f172a] text-white flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-12 pt-28 pb-16  ">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl space-y-4">
        <p className="text-lg">Hello, It's Me</p>
        <h1 className="text-4xl font-bold">AL AMIN</h1>
        <h2 className="text-2xl font-semibold">
          I'm a{' '}
          <span className="text-cyan-400">
            <Typewriter
              words={['Frontend Developer',
        'Lifelong Learner',
        'Creative Coder']}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          ab autem repellat reiciendis ipsam perspiciatis.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-cyan-400 text-2xl">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="cursor-pointer hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="cursor-pointer hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
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
          href="/path-to-your-cv.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-500 transition duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="rounded-full bg-cyan-400 p-[3px] shadow-xl">
          <img
            src={myImage}
            alt="Al Amin"
            className="rounded-full w-44 h-44 md:w-72 md:h-72 object-cover border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
