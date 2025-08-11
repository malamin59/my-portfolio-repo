import { useEffect, useState } from "react";
import myImage from "../../assets/alamin.jpg";
import { FaTwitter, FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { TbFidgetSpinner } from "react-icons/tb";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0f172a]">
        <TbFidgetSpinner className="text-cyan-400 text-6xl animate-spin" />
        OR: <p className="text-xl text-white">Loading...</p>
      </div>
    );
  }
  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-12 pt-28 pb-16  ">
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

// import { useEffect, useState } from "react";
// import myImage from "../../assets/alamin.webp";
// import {
//   FaTwitter,
//   FaLinkedinIn,
//   FaGithub,
//   FaDownload,
// } from "react-icons/fa";
// import { TbFidgetSpinner } from "react-icons/tb";
// import { Typewriter } from "react-simple-typewriter";

// const Home = () => {
//   const [loading, setLoading] = useState(true);

//   // Simulate loading delay (e.g., image load or initial app load)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 500); // adjust time as needed
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-[#0f172a]">
//         <TbFidgetSpinner className="animate-spin text-cyan-400 text-6xl" />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0f172a] text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-12 pt-28 pb-16">
//       {/* Left Content */}
//       <div className="text-center md:text-left max-w-xl space-y-4">
//         <p className="text-xl md:text-2xl font-medium">Hello, It's Me</p>
//         <h1 className="text-5xl md:text-6xl font-extrabold">AL AMIN</h1>
//         <h2 className="text-3xl md:text-4xl font-semibold">
//           I'm a{" "}
//           <span className="text-cyan-400">
//             <Typewriter
//               words={[
//                 "Frontend Developer",
//                 "Lifelong Learner",
//                 "Creative Coder",
//               ]}
//               loop={0}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </span>
//         </h2>
//         <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
//           Passionate frontend developer skilled in React, Tailwind, and
//           JavaScript. I love crafting modern web experiences and continuously
//           learning new technologies.
//         </p>

//         {/* Social Icons */}
//         <div className="flex justify-center md:justify-start gap-6 text-cyan-400 text-2xl">
//           <a
//             href="https://github.com/malamin59"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//             className="cursor-pointer hover:text-white transition"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//             className="cursor-pointer hover:text-white transition"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             className="cursor-pointer hover:text-white transition"
//           >
//             <FaLinkedinIn />
//           </a>
//         </div>

//         {/* Download CV Button */}
//         <a
//           href="https://drive.google.com/file/d/1D7gSmHh99yNjTtEo0_yffeR43OiaXZMc/view"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-500 transition duration-300"
//         >
//           <FaDownload />
//           Download CV
//         </a>
//       </div>

//       {/* Right Image */}
//       <div className="relative">
//         <div className="rounded-full bg-cyan-400 p-[3px] shadow-xl">
//           <img
//             src={myImage}
//             alt="Al Amin - Frontend Developer"
//             loading="lazy"
//             className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
