import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/alamin.png";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact",
  ];

  const active = location.hash ? location.hash.substring(1) : "home";

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#0f172a] text-white px-4 md:px-20 h-16 flex items-center z-50">
      {/* Logo */}
      <div className="flex-1">
        <a href="#home" className="text-2xl font-bold">
          <img className="w-12 rounded-full" src={logo} alt="Logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 gap-4 text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/#${item}`}
                onClick={() => setIsOpen(false)}
                className={`hover:text-cyan-400 ${
                  active === item ? "text-cyan-400 font-semibold" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center z-60">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0f172a] shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button inside sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <HiX className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Menu items */}
        <ul className="flex flex-col p-4 space-y-4 text-white text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/#${item}`}
                onClick={() => setIsOpen(false)}
                className={`block hover:text-cyan-400 ${
                  active === item ? "text-cyan-400 font-semibold" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
