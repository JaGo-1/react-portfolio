import { useRef } from "react";
import { logo } from "../assets/index";
import StaggeredMenu from "./StaggeredMenu";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Work", ariaLabel: "View our work", link: "/work" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
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
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={["#818dfc", "#5667FF"]}
          logoUrl={logo}
          logoMobileUrl="logo-dark.svg"
          accentColor="#5667FF"
        />
      </div>
    </div>
  );
};

export default Navbar;
