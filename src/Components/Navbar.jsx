import { useState } from "react";
import logo from "../assets/alamin.png";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact",
  ];

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
                onClick={() => {
                  setActive(item);
                  setIsOpen(false); // if mobile menu open, close it
                }}
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
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f172a] md:hidden shadow-md z-40">
          <ul className="flex flex-col items-start p-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                {/* import { Link, useLocation } from "react-router-dom"; */}

                <Link
                  to={`/#${item}`}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false); // if mobile menu open, close it
                  }}
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
      )}
    </div>
  );
};

export default Navbar;
