import { Link } from "react-router";
import projects from "./Projects";

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl shadow-lg p-4 space-y-4"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold">{project.name}</h3>

            {/* Render tech stack */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 rounded text-sm"
                >
                  {techItem.icon} {techItem.name}
                </span>
              ))}
            </div>

            <Link
              to={`/project/${project.id}`}
              className="inline-block mt-4 px-4 py-2 bg-cyan-400 text-black font-medium rounded-full hover:bg-cyan-500 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
