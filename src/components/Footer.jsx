import { useRef } from "react";
import { Button } from "./Button";
import { logo, logoIcon } from "../assets";
import { useTime } from "../hooks/useTime";
import { useScrollReveal } from "../hooks/useScrollReveal";

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/jacquelineegomez22",
    label: "LinkedIn",
  },
  {
    href: "mailto:jacquelineegomez21@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const containerRef = useRef(null);
  const localTime = useTime();
  useScrollReveal(containerRef, ".reveal-text");
  return (
    <footer
      ref={containerRef}
      className="z-0 relative bg-background text-text-primary w-full lg:h-screen"
    >
      <div className="px-8 xl:px-20 py-20">
        <div className="flex justify-between mb-12">
          <h5 className="section-title">[ contact ]</h5>
          <h5 className="section-title">[ GMT-3 — {localTime || "..:.."} ]</h5>
        </div>

        <div className="z-20 relative flex flex-col sm:flex-row justify-between gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <span className="relative flex h-2 w-2 lg:h-3 lg:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 lg:h-3 lg:w-3 bg-green-500"></span>
              </span>
              <p className="font-srcpro uppercase text-xs lg:text-lg">
                Disponible para nuevos proyectos
              </p>
            </div>

            <div className="reveal-text flex flex-col gap-5 font-inter font-light uppercase text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span>Hablemos</span> <span>directamente</span>
            </div>
            <div className="reveal-text mt-5 md:mt-20">
              <Button
                title="Contáctame"
                href="mailto:jacquelineegomez21@gmail.com"
              />
            </div>
          </div>

          <div className="reveal-text flex flex-col gap-6 font-srcpro uppercase">
            <p className="text-lg xl:text-3xl font-semibold">Conectemos</p>
            {socialLinks.map(({ href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-white text-sm xl:text-2xl"
              >
                <span>{`0${index}. ${label}`}</span>
              </a>
            ))}
          </div>
        </div>

        <img
          className="hidden lg:block opacity-15 absolute bottom-15 w-[130px]"
          src={logo}
          alt="logo"
        />
        <img
          className="hidden lg:block absolute right-0 bottom-0 w-xl xl:w-3xl z-10"
          src={logoIcon}
          alt="logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
