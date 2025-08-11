import { FaReact, FaBell } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
  SiJsonwebtokens,
} from "react-icons/si";

const projects = [
    {
    id: 1,
    name: "CampusBite",
    image: "https://i.ibb.co.com/ymFcCBHc/image3.png", // Replace with actual screenshot
    tech: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "SweetAlert2", icon: <FaBell color="#F7B933" /> }, // approximated real color
    ],
    description:
      "A hostel meal management system where users can view, like, and request meals. Admins can manage upcoming and published meals, handle requests, and track deliveries.",
    liveLink: "https://campusbite-3dd62.web.app/",
    githubLink: "https://github.com/malamin59/optimuspick-web-app",
    challenges:
      "Implementing likes with role-based restrictions and auto-publishing meals when likes reach a threshold.",
    future:
      "Add analytics dashboard for admins, push notifications for meal updates, and multi-hostel support.",
  },
  {
    id: 2,
    name: "RoomMate Finder",
    image: "https://i.ibb.co/gLKK0Dh4/Screenshot-2025-06-28-232227.png",
    tech: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Express", icon: <SiExpress color="#000000" /> },
    ],
    description: "A platform to find compatible roommates.",
    liveLink: "https://my-mongo-auth-project.web.app",
    githubLink: "https://github.com/malamin59/Roommate-Finder",
    challenges: "Matching algorithm and Firebase auth setup.",
    future: "Add real-time chat and map-based search.",
  },
  {
    id: 3,
    name: "AgroMarket",
    image: "https://i.ibb.co/PzgRY9cR/Screenshot-2025-06-28-232204.png",
    tech: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "JWT", icon: <SiJsonwebtokens color="#000000" /> },
    ],
    description: "An e-commerce platform for farmers and agro-dealers.",
    liveLink: "https://optimuspick-d386a.web.app",
    githubLink:
      "https://github.com/malamin59/OptimusPick-Webapp/tree/main/my-OptimusPick-app-client",
    challenges: "Like count integration and product management logic.",
    future: "Add admin analytics and mobile support.",
  },

];

export default projects;
