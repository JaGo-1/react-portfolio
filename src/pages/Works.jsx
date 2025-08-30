import { ubifacil } from "../assets";
import { FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import HoverTooltip from "../components/HoverTooltip";

const Works = () => {
  return (
    <section className="w-full">
      <div className="bg-zinc-200">
        <div className="max-w-[1700px] m-auto h-[400px] py-16 px-8 lg:px-20 text-center md:text-start flex flex-col items-center justify-center gap-10">
          <h4 className="inline-block relative text-4xl md:text-5xl lg:text-6xl font-srcpro font-medium before:content-[''] before:absolute before:bottom-2 before:-left-35 before:w-28 before:h-[1px] before:bg-zinc-900 lg:self-end">
            Del concepto al código.
          </h4>
          <p className="mt-10 text-lg lg:text-3xl font-inter text-zinc-900 inline-block lg:self-start">
            Conocé lo que estuve creando
          </p>
        </div>
      </div>

      {/* Project */}
      <div className="bg-zinc-100 py-10 md:py-16">
        <h5
          className="relative inline-block text-2xl font-srcpro pl-36
          before:content-[''] before:absolute before:bottom-2 before:left-0 before:w-28 before:h-[1px] before:bg-zinc-900"
        >
          UBIFACIL.
        </h5>

        <div className="max-w-[1900px] mx-auto md:mx-0 grid md:grid-cols-2 gap-12 items-center mt-5">
          {/* Image */}
          <div className="shadow-lg overflow-hidden">
            <img
              src={ubifacil}
              alt="Ubifacil project picture"
              className="w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="text-left px-5 flex flex-col gap-10">
            <p className="text-zinc-700 lg:text-3xl">
              Plataforma web diseñada para facilitar a los usuarios el acceso a
              información sobre hoteles, restaurantes y eventos locales,
              permitiendo explorar, guardar favoritos y dejar reseñas de manera
              sencilla e interactiva.
            </p>
            <div className="flex gap-3 text-2xl lg:text-3xl">
              <HoverTooltip icon={FaFigma} label="Figma" />
              <HoverTooltip icon={FaReact} label="React" />
              <HoverTooltip icon={RiTailwindCssFill} label="TailwindCSS" />
            </div>
            <a
              href="https://ubifacil.vercel.app/"
              target="_blank"
              className="relative group w-fit font-srcpro"
            >
              <p className=" text-zinc-800 lg:text-3xl">Ver Proyecto</p>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
