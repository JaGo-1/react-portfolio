import { useState, useRef } from "react";
import { logo, arrow } from "../assets/index";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navItems = [
    {
      title: "Inicio",
      href: "#home",
    },
    {
      title: "Info",
      href: "#info",
    },
    {
      title: "Proyectos",
      href: "#works",
    },
    {
      title: "Contacto",
      href: "#contact",
    },
  ];

  // GSAP
  const tl = useRef();
  const menuBtnRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("Inicio");
  const [hoverItem, setHoverItem] = useState(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to("#nav-container", {
      autoAlpha: 1,
      backgroundColor: "rgba(0,0,0)",
      duration: 0.3,
    });

    tl.current.to(
      ".site-logo",
      {
        color: "#fff",
        duration: 0.2,
      },
      "-=0.1",
    );

    tl.current.from(".flexbox > div", {
      opacity: 0,
      y: 10,
      duration: 0.4,
      stagger: { amount: 0.04 },
    });

    tl.current.to(
      ".nav-link > a",
      {
        top: 0,
        ease: "power2.inOut",
        duration: 0.8,
        stagger: { amount: 0.1 },
      },
      "-=0.4",
    );

    const btn = menuBtnRef.current;

    btn.onclick = () => {
      btn.classList.toggle("active");

      if (tl.current.reversed()) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    };

    return () => {
      btn.onclick = null;
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    tl.current.reversed() ? tl.current.play() : tl.current.reverse();
  };

  return (
    <nav className="py-4 fixed z-50 w-full flex justify-between items-center px-8 xl:px-20">
      {/* LOGO */}
      <img className="w-25 md:w-35 z-60" src={logo} alt="logo" />

      {/* Menu toggle */}
      <div className="menu-toggle">
        <div
          id="menu-toggle-btn"
          ref={menuBtnRef}
          onClick={toggleMenu}
          className="h-[24px] w-[30px] md:h-[34px] md:w-[40px] cursor-pointer relative z-50"
        >
          <span
            className={`
              block absolute h-[2px] w-full bg-white transition-all duration-300
              ${isOpen ? "top-1/2 rotate-45" : "top-[8px] rotate-0"}
            `}
          ></span>

          <span
            className={`
              block absolute h-[2px] w-full bg-white transition-all duration-300
              ${isOpen ? "top-1/2 -rotate-45" : "top-[16px] rotate-0"}
            `}
          ></span>
        </div>
      </div>

      {/* Nav-container */}
      <div
        id="nav-container"
        className={`
          fixed top-0 left-0 w-full h-screen flex justify-center items-center text-white opacity-0 bg-transparent
        `}
      >
        <div className="w-full px-8 xl:px-20 flex flex-col lg:flex-row justify-center items-center">
          {/* <div className="order-2 lg:order-0 z-[9999] flexbox flex flex-col justify-between items-start">
            <img className="w-25 md:35" src={logo} alt="logo" />
            <div className="nav-socials flex flex-col">
              <a href="">Github</a>
              <a href="">LinkedIn</a>
              <a href="">Instagram</a>
              <a href="">Email</a>
            </div>
          </div> */}
          <div className="col">
            {navItems.map((item, i) => {
              const showArrow =
                hoverItem === item.title ||
                (hoverItem === null && activeItem === item.title);

              return (
                <div
                  key={i}
                  className="nav-link relative flex flex-col gap-15 lg:gap-8"
                  onMouseEnter={() => setHoverItem(item.title)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  <a
                    className="relative font-srcpro tracking-widest font-light top-[90px] text-5xl md:text-6xl  text-center"
                    href={item.href}
                    onClick={() => toggleMenu()}
                  >
                    {item.title}
                  </a>
                  <div className="relative after:content-[''] after:absolute after:-top-[60px] md:after:-top-[25px] after:left-0 after:w-[600px] after:h-[300px] lg:after:h-[95px] after:bg-black after:m-auto after:transition-all after:duration-1000"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
