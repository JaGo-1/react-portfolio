import { worksImg } from "../assets";

export const works = [
  {
    id: "rawframe",
    title: "rawframe",
    type: "landing page",
    images: [worksImg.rawframe, worksImg.rf_1, worksImg.rf_2],
    description:
      "Desarrollo de una interfaz de alto impacto visual que utiliza el movimiento como recurso narrativo. El enfoque principal fue la creación de una experiencia fluida y profesional.",
    objective:
      "Lograr una navegación intuitiva donde las micro-interacciones refuercen la identidad de marca. El objetivo técnico fue implementar un sistema de animaciones controlado y eficiente que priorice la claridad del contenido y la jerarquía visual.",
    solution:
      "Integración de GSAP para gestionar transiciones de scroll y efectos de profundidad. Se priorizó la optimización de recursos mediante una arquitectura modular en React, asegurando una interfaz ligera, sobria y técnicamente sólida.",
    techStack: ["React", "Tailwind CSS", "GSAP", "ScrollTrigger"],
    demoUrl: "https://rawframe-ui.vercel.app/",
    repoUrl: "https://github.com/JaGo-1/rawframe-ui.git",
  },
];
