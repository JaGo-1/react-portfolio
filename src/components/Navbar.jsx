import { logo } from "../assets/index";
import StaggeredMenu from "./StaggeredMenu";

const Navbar = () => {
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

  return (
    <div className="fixed w-full h-screen pointer-events-none z-50">
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
  );
};

export default Navbar;
