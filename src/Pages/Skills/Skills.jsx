import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaJsSquare, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaDatabase
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiFirebase, SiJsonwebtokens } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useState } from "react"; // <-- Import useState for state management

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Expert Level", percent: 85, desc: "Advanced proficiency", icon: <FaReact className="text-cyan-400 text-3xl" /> },
      { name: "JavaScript", level: "Expert Level", percent: 90, desc: "Master level expertise", icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
      { name: "Tailwind CSS", level: "Expert Level", percent: 88, desc: "Advanced proficiency", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
      { name: "HTML5", level: "Expert Level", percent: 95, desc: "Master level expertise", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS3", level: "Expert Level", percent: 92, desc: "Master level expertise", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Expert Level", percent: 80, desc: "Advanced proficiency", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
      { name: "Express.js", level: "Expert Level", percent: 75, desc: "Strong working knowledge", icon: <SiExpress className="text-gray-300 text-3xl" /> },
      { name: "MongoDB", level: "Expert Level", percent: 70, desc: "Strong working knowledge", icon: <SiMongodb className="text-green-400 text-3xl" /> },
      { name: "REST APIs", level: "Expert Level", percent: 78, desc: "Strong working knowledge", icon: <FaDatabase className="text-purple-400 text-3xl" /> },
      { name: "JWT Auth", level: "Expert Level", percent: 72, desc: "Strong working knowledge", icon: <SiJsonwebtokens className="text-yellow-500 text-3xl" /> },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "VS Code", level: "Expert Level", percent: 95, desc: "Master level expertise", icon: <VscVscode className="text-blue-400 text-3xl" /> },
      { name: "Git", level: "Expert Level", percent: 78, desc: "Strong working knowledge", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
      { name: "GitHub", level: "Expert Level", percent: 80, desc: "Advanced proficiency", icon: <FaGithub className="text-gray-200 text-3xl" /> },
      { name: "Firebase", level: "Expert Level", percent: 72, desc: "Strong working knowledge", icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
      { name: "Figma", level: "Expert Level", percent: 75, desc: "Strong working knowledge", icon: <FaFigma className="text-pink-400 text-3xl" /> },
    ],
  },
];

const Skills = () => {
  // 1. Added state to track which categories are expanded.
  // The state is an object with category names as keys and boolean as value.
  // true = expanded (show all skills), false or undefined = collapsed (show 3 skills).
  const [expandedCategories, setExpandedCategories] = useState({});

  // 2. Toggle function to expand/collapse a category when user clicks the button.
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section id="skills" className="bg-[#0f172a] text-white py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        My Technical Skills & Expertise
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-6">
        {skillsData.map((group, idx) => {
          // 3. Check if the current category is expanded or not.
          const isExpanded = expandedCategories[group.category];
          // 4. Show either all skills or only first 3 depending on expanded state.
          const visibleSkills = isExpanded ? group.skills : group.skills.slice(0, 3);

          return (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-200">
                {group.category}
              </h3>
              <div className="space-y-6">
                {visibleSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#1e293b] rounded-lg p-5 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Skill top row with icon, name, level, and percent */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <div>
                          <h4 className="font-semibold">{skill.name}</h4>
                          <p className="text-xs text-gray-400">{skill.level}</p>
                        </div>
                      </div>
                      <span className="text-cyan-400 font-bold">{skill.percent}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>

                    {/* Skill description */}
                    <p className="text-xs text-gray-400 mt-2">{skill.desc}</p>
                  </motion.div>
                ))}

                {/* 5. Conditionally render the toggle button only if more than 3 skills */}
                {group.skills.length > 3 && (
                  <button
                    onClick={() => toggleCategory(group.category)} // Toggle expand/collapse
                    className="w-full mt-3 py-2  hover:bg-cyan-600 text-white rounded-lg transition"
                  >
                    {/* Change button text based on expanded state */}
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
