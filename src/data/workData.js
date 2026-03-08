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
    techCore: ["React", "Tailwind CSS", "GSAP", "ScrollTrigger"],
    demoUrl: "https://rawframe-ui.vercel.app/",
    repoUrl: "https://github.com/JaGo-1/rawframe-ui.git",
  },
  {
    id: "weather-app",
    title: "Weather App",
    type: "Utility App",
    images: [worksImg.weather_app, worksImg.w_1, worksImg.w_2],
    description:
      "Aplicación meteorológica interactiva. La interfaz reacciona dinámicamente a los datos atmosféricos, transformando el entorno visual según las condiciones climáticas en tiempo real.",
    objective:
      "Optimizar la entrega de información mediante una arquitectura reactiva. El reto principal fue gestionar estados asíncronos, asegurando que la transición entre la búsqueda, la carga (skeletons) y la visualización final fuera fluida y sin saltos visuales.",
    solution:
      "Desarrollo de una arquitectura modular basada en Custom Hooks para separar la lógica de negocio de la UI. Implementación de 'Debouncing' para optimizar las peticiones a la API y uso de Framer Motion para micro-interacciones.",
    techCore: ["React", "Framer Motion", "OpenWeather API", "Custom Hooks"],
    demoUrl: "https://weather-lppjwqhio-ja-gos-projects.vercel.app/",
    repoUrl: "https://github.com/JaGo-1/weather-react-app.git",
  },
];
