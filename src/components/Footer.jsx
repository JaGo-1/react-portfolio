import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "./Button";
import { ellipse } from "../assets";

const socialLinks = [
  {
    href: "https://github.com/JaGo-1",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/jacquelineegomez22",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "mailto:jacquelineegomez21@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
  },
];

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative bg-zinc-900 text-zinc-200 px-6 py-12 md:py-20 lg:px-20 overflow-hidden"
    >
      <div className="flex mx-auto flex-col gap-10">
        <h3 className="font-srcpro text-4xl md:text-5xl font-medium">
          Trabajemos juntos{" "}
          <span className="inline-block w-24 h-[1px] bg-zinc-400 align-middle ml-3"></span>
        </h3>
        {/* Contact button */}
        <Button
          text="Contáctame"
          href="https://www.linkedin.com/in/jacquelineegomez22/"
          variant="dark"
        />
        {/* Social media */}
        <div className="flex gap-6 text-2xl">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-white"
            >
              <span
                className={`${isVisible ? "animate-pulse" : ""} inline-block`}
              >
                {icon}
              </span>
            </a>
          ))}
        </div>
      </div>
      <img
        src={ellipse}
        className="hidden md:block absolute right-0 bottom-0"
      />
    </footer>
  );
};

export default Footer;
