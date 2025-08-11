import { FaGithub } from "react-icons/fa";
import image from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-cyan-400 px-4 py-6 border-t border-cyan-800">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img
            className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow"
            src={image}
            alt="Al Amin Logo"
          />
        </div>

        {/* Name and GitHub */}
        <h3 className="text-xl font-semibold mb-2">AL AMIN</h3>
        <a
          href="https://github.com/malamin59"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-cyan-400 hover:text-white text-2xl transition duration-300 inline-block mb-3"
        >
          <FaGithub />
        </a>

        {/* Divider */}
        <div className="w-20 h-px bg-cyan-700 mx-auto mb-3" />

        {/* Copyright */}
        <p className="text-sm mb-1">
          &copy; {new Date().getFullYear()} AL AMIN. All rights reserved.
        </p>
        <p className="text-sm">
          Designed & Developed by{" "}
          <span className="font-medium text-white">AL AMIN</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
