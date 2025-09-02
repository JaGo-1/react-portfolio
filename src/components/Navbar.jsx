import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { logo } from "../assets/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[70px] px-6 lg:px-20 py-4 flex items-center justify-between z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-zinc-100/90 shadow-lg" : "bg-zinc-100/70"
      } text-zinc-800`}
    >
      {/* LOGO */}
      <img className="w-20" src={logo} alt="logo" />

      {/* Desktop menu */}
      <ul className="hidden md:flex md:items-center gap-9 lg:text-lg tracking-wide font-inter">
        <a href="#" className="relative group">
          <li>
            Inicio
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#proyectos" className="relative group">
          <li>
            Proyectos
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
        <a href="#footer" className="relative group">
          <li>
            Contacto
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </a>
      </ul>

      {/* Hamburger button (mobile only) */}
      <button
        onClick={toggleMenu}
        className="md:hidden z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <IoClose className="text-zinc-100" size={28} />
        ) : (
          <IoMenu size={28} />
        )}
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black/90 text-zinc-100 p-6 pt-16 flex flex-col gap-4 transition-all duration-300 z-40 md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-2xl">
          <li onClick={toggleMenu}>
            <a href="#">Inicio</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#footer">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
