import { useRef } from "react";
import { logo, logoMobile } from "../assets/index";
import StaggeredMenu from "./StaggeredMenu";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  const menuItems = [
    { label: "Inicio", ariaLabel: "Ir a la página principal", link: "/#" },
    { label: "Conóceme", ariaLabel: "Sobre mí", link: "/#about" },
    { label: "Proyectos", ariaLabel: "Ver proyectos", link: "/#work" },
    { label: "Contacto", ariaLabel: "Contacto", link: "/#contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://instagram.com" },
    { label: "GitHub", link: "https://github.com/JaGo-1" },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jacquelineegomez22/",
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50">
      <div ref={navRef} className="w-full h-full">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={false}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={["var(--color-darkGray)", "var(--color-lightGray)"]}
          logoUrl={logo}
          logoMobileUrl={logoMobile}
          accentColor="var(--color-darkGray)"
        />
      </div>
    </div>
  );
};

export default Navbar;
