import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { logo } from "../assets/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-zinc-100 h-[70px] text-white px-6 lg:px-20 py-4 flex items-center justify-between relative">
      {/* LOGO */}
      <img src={logo} alt="logo" />

      {/* Desktop menu */}
      <ul className="hidden md:flex md:items-center gap-9 lg:text-lg tracking-wide text-zinc-800 font-inter">
        <a href="#" className="relative group">
          <li>
            Inicio
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#" className="relative group">
          <li>
            Sobre mi
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#" className="relative group">
          <li>
            Proyectos
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#" className="relative group">
          <li>
            Contacto
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
      </ul>

      {/* Hamburger button (mobile only) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white z-20"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <IoClose size={28} />
        ) : (
          <IoMenu size={28} className="text-zinc-800" />
        )}
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black text-white p-6 pt-16 flex flex-col gap-4 transition-all duration-300 z-10 md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-2xl">
          <li onClick={toggleMenu}>Inicio</li>
          <li onClick={toggleMenu}>Sobre mi</li>
          <li onClick={toggleMenu}>Proyectos</li>
          <li onClick={toggleMenu}>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
