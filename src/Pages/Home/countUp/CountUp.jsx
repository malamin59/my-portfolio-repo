import React from "react";
import CountUp from "react-countup";
import { FaGithub, FaProjectDiagram, FaLaptopCode } from "react-icons/fa"; // Import icons

const CountUpPage = () => {
  const githubCommits = 500;
  const projectsCount = 18;
  const technologiesCount = 16;

  return (
    <section className="bg-[#0f172a] lg:py-8 py-4 px-4 lg:mr-16 rounded-lg max-w-5xl mx-auto">
      {/* Use grid on small devices */}
      <div className="grid   grid-cols-3 gap-2  justify-center items-center text-center">
        
        {/* GitHub Commits */}
        <div>   
          <FaGithub className="lg:text-6xl text-4xl text-cyan-400 mx-auto mb-4" />
          <p className="text-lg mb-2  tracking-widest text-cyan-400">
            GitHub <br />Commits
          </p>
          <h1 className="lg:text-5xl text-4xl font-extrabold text-cyan-400">
            <CountUp start={0} end={githubCommits} duration={3} separator="," />+
          </h1>
        </div>

        {/* Projects */}
        <div>
          <FaProjectDiagram className="lg:text-6xl text-4xl text-cyan-400 mx-auto mb-4" />
          <p className="text-lg mb-2  tracking-widest text-cyan-400">
            Projects Completed
          </p>
          <h1 className="lg:text-6xl text-4xl font-extrabold text-cyan-400">
            <CountUp start={0} end={projectsCount} duration={3} />+
          </h1>
        </div>

        {/* Technologies */}
        <div>
          <FaLaptopCode className="lg:text-6xl text-4xl text-cyan-400 mx-auto mb-4" />
          <p className="text-lg mb-2  tracking-widest text-cyan-400">
            Technologies
          </p>
          <h1 className="lg:text-6xl font-extrabold text-4xl text-cyan-400">
            <CountUp start={0} end={technologiesCount} duration={3} />+
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CountUpPage;
