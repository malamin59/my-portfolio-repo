
import { useParams } from "react-router-dom";
import projects from "./Projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="text-white text-center mt-20">Project not found</div>;
  }

  return (
    <div className="bg-[#0f172a]  text-white min-h-screen px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">{project.name}</h2>
      <img src={project.image} alt={project.name} className="w-full max-w-xl mx-auto rounded-lg mb-6" />
      <p className="mb-4"><strong>Description:</strong> {project.description}</p>
      <p className="mb-4"><strong>Technologies:</strong> {project.tech.join(", ")}</p>
      <p className="mb-4"><strong>Challenges:</strong> {project.challenges}</p>
      <p className="mb-4"><strong>Future Plans:</strong> {project.future}</p>
      <div className="space-x-4 mt-6">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-cyan-400 text-black font-medium rounded-full hover:bg-cyan-500 transition"
        >
          Live Site
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
