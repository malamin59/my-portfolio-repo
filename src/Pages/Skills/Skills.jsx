// const Skills = () => {
//   const skills = [
//     { name: "HTML", percent: 90 },
//     { name: "CSS", percent: 70 },
//     { name: "Tailwind", percent: 80 },
//     { name: "JavaScript", percent: 75 },
//     { name: "React", percent: 50 },
//     { name: "Firebase", percent: 65 },
//     { name: "Node.js", percent: 32 },
//     { name: "Mongodb", percent: 35 },
 

//   ];
//   console.log(skills)

//   return (
//     <section id="skills" className="bg-[#0f172a] text-white py-10 px-6 md:px-10">
//       <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">My Skills</h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
//         {skills.map((skill, index) => (
//           <div key={index} className="text-center space-y-2">
//             <div
//               className="radial-progress text-cyan-400"
//               style={{ "--value": skill.percent, "--size": "6rem", "--thickness": "6px" }}
//               role="progressbar"
//             >
//               {skill.percent}%
//             </div>
//             <p className="text-sm mt-2">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 70 },
    { name: "Tailwind", percent: 80 },
    { name: "JavaScript", percent: 75 },
    { name: "React", percent: 50 },
    { name: "Firebase", percent: 65 },
    { name: "Node.js", percent: 32 },
    { name: "MongoDB", percent: 35 },
  ];

  return (
    <section id="skills" className="bg-[#0f172a] text-white py-12 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">My Skills</h2>

      {/* Marquee section */}
      <div className="mb-14">
        <Marquee pauseOnHover speed={50} gradient={false}>
          <div className="flex lg:gap-24 gap-8 md:gap-40  text-3xl text-cyan-400">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiJavascript title="JavaScript" />
            <FaReact title="React" />
            <SiFirebase title="Firebase" />
            <FaNodeJs title="Node.js" />
            <SiMongodb title="MongoDB" />
          </div>
        </Marquee>
      </div>

      {/* Radial progress section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="text-center space-y-2">
            <div
              className="radial-progress text-cyan-400"
              style={{
                "--value": skill.percent,
                "--size": "6rem",
                "--thickness": "6px",
              }}
              role="progressbar"
            >
              {skill.percent}%
            </div>
            <p className="text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

