import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "./Button";
import { ellipse } from "../assets";

const Footer = () => {
  return (
    <footer className="relative bg-zinc-900 text-zinc-200 px-6 py-12 md:py-20 lg:px-20 overflow-hidden">
      <div className="flex mx-auto flex-col gap-10">
        {/* Encabezado */}
        <h3 className="font-srcpro text-4xl md:text-5xl font-medium">
          Let´s connect{" "}
          <span className="inline-block w-24 h-[1px] bg-zinc-400 align-middle ml-3"></span>
        </h3>

        {/* Botón de contacto */}
        <Button text="Contact" variant="dark" />

        {/* Redes sociales */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/JaGo-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jacquelineegomez22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jacquelineegomez21@gmail.com"
            className="hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <img src={ellipse} className="absolute right-0 bottom-0" />
    </footer>
  );
};

export default Footer;
