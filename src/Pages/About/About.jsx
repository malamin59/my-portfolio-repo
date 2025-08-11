import { FaLaptopCode, FaCogs, FaFire, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import myImage from "../../assets/alamin.jpg";
import { useState } from "react";

const cards = [
  {
    icon: <FaLaptopCode className="text-cyan-400" size={28} />,
    title: "Frontend Development",
    desc: "Proficient in React, Tailwind CSS, DaisyUI, React Router, and responsive design. Experienced in building animated UIs and form-driven features.",
  },
  {
    icon: <FaCogs className="text-cyan-400" size={28} />,
    title: "Backend & Database",
    desc: "Skilled in Node.js, Express.js, MongoDB. Built and deployed RESTful APIs with authentication, order management, and database integration.",
  },
  {
    icon: <FaFire className="text-cyan-400" size={28} />,
    title: "Firebase Integration",
    desc: "Integrated Firebase Auth, Firestore, and hosting in multiple projects for secure and scalable app delivery.",
  },
  {
    icon: <FaGlobe className="text-cyan-400" size={28} />,
    title: "Career Vision",
    desc: "Actively seeking freelance and remote roles to contribute to real-world projects and grow professionally. Planning to master Python and advanced stacks next.",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  const [showMore , setShowMore] = useState(false);
   const aboutText = `Hi! I'm Alamin, a passionate React developer with experience
  building responsive and user-friendly web applications. I enjoy
  turning ideas into reality using code, and I am always eager to
  learn new technologies and improve my skills. With over 7 months of
  programming experience, I have developed projects using React,
  Tailwind CSS, and Firebase, and I'm excited to continue growing as a
  full-stack developer. My journey in programming started with curiosity
  and has evolved into a passion for creating meaningful web applications
  that solve real-world problems.`;
 const words = aboutText.trim().split(" ");
 const displayText = showMore ? aboutText  : words.slice(0, 50).join(" ")+ "..."
  
  return (
    <section
      id="about"
      className="bg-[#1c2741] text-white py-16 px-6 max-w-5xl mx-auto"
    >
      {/* Top About Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="relative">
          <div className="rounded-full bg-cyan-400 p-[3px] shadow-xl">
            <img
              src={myImage}
              alt="Al Amin"
              className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-xl text-lg leading-relaxed space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <span className="text-cyan-400 text-xl block mb-4">
            Frontend Developer
          </span>
          <p>{displayText}</p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-cyan-400 hover:underline"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        className="grid gap-6 mt-12 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-[#0f172a] p-6 rounded-lg shadow-lg flex gap-4 items-start"
            variants={itemVariants}
          >
            <div>{card.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
