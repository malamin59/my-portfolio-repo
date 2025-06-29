import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiFigma,
  SiExpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "HTML", percent: 90, icon: <FaHtml5 className="text-2xl" /> },
  { name: "CSS", percent: 70, icon: <FaCss3Alt className="text-2xl" /> },
  {
    name: "Tailwind",
    percent: 80,
    icon: <SiTailwindcss className="text-2xl" />,
  },
  {
    name: "JavaScript",
    percent: 45,
    icon: <SiJavascript className="text-2xl" />,
  },
  { name: "React", percent: 49, icon: <FaReact className="text-2xl" /> },
  { name: "Firebase", percent: 65, icon: <SiFirebase className="text-2xl" /> },
  { name: "VS Code", percent: 75, icon: <VscCode className="text-2xl" /> },
  { name: "Figma", percent: 85, icon: <SiFigma className="text-2xl" /> },
  {
    name: "ReactBits",
    percent: 35,
    icon: <TbBrandReactNative className="text-2xl" />,
  },
{ name: "Express.js", percent: 38, icon: <SiExpress className="text-2xl" /> },
  { name: "MongoDB", percent: 35, icon: <SiMongodb className="text-2xl" /> },
  { name: "Node.js", percent: 32, icon: <FaNodeJs className="text-2xl" /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0f172a] text-white px-0 py-12 lg:px-6 md:px-10"
    >
      <motion.h2
        className="text-3xl font-bold text-cyan-400 mb-10 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        My Skills
      </motion.h2>

      {/* Marquee Section */}
      <div className="mb-14">
        <Marquee pauseOnHover speed={50} gradient={false}>
          <div className="flex lg:gap-24 gap-10 text-3xl text-cyan-400 items-center">
            {skills.map((skill, index) => (
              <div key={index} title={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Radial Progress Section with animation */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-center space-y-2"
            variants={itemVariants}
          >
            <div
              className="radial-progress text-cyan-400 flex items-center justify-center"
              style={{
                "--value": skill.percent,
                "--size": "6rem",
                "--thickness": "6px",
              }}
              role="progressbar"
            >
              {skill.icon}
            </div>
            <p className="text-sm mt-2">
              {skill.name} - {skill.percent}%
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
