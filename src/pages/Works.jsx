import { ubifacil } from "../assets";
import { FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import HoverTooltip from "../components/HoverTooltip";

const TopInfo = () => {
  return (
    <div className="bg-zinc-900 text-zinc-200 py-15 relative max-w-[1480px] m-auto">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-15 px-8 lg:px-20 text-center md:text-left relative">
        <div>
          <h6 className="font-srcpro text-xl xl:text-2xl tracking-widest mb-2">
            OBJETIVO
          </h6>
          <p className="lg:text-lg xl:text-xl">
            Transformar ideas en experiencias digitales simples y atractivas.
          </p>
        </div>

        <div>
          <h6 className="font-srcpro text-xl xl:text-2xl tracking-widest mb-2">
            METODOLOGÍA
          </h6>
          <p className="lg:text-lg xl:text-xl">
            Con organización, comunicación clara y atención al detalle en cada
            etapa.
          </p>
        </div>

        <div>
          <h6 className="font-srcpro text-xl xl:text-2xl tracking-widest mb-2">
            VALOR
          </h6>
          <p className="lg:text-lg xl:text-xl">
            Soluciones funcionales, confiables y centradas en el usuario.
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute border-2 border-zinc-700 top-4 -left-4 right-[14px] bottom-[-14px] pointer-events-none"></div>
    </div>
  );
};

const Works = () => {
  return (
    <section className="w-full bg-zinc-100 lg:px-20 ">
      <TopInfo />
      {/* Project Section */}
      <div id="proyectos" className="bg-zinc-100 px-5 py-20 md:py-30">
        <h5 className="text-4xl font-medium font-srcpro text-zinc-900 text-center md:text-left md:text-5xl lg:text-6xl xl:text-7xl  mb-10 md:mb-20">
          Proyectos.
        </h5>
        <div className="mx-auto grid md:grid-cols-2 gap-12 items-start mt-5">
          {/* Image */}
          <div className="shadow-lg overflow-hidden h-full">
            <img
              src={ubifacil}
              alt="Ubifacil project picture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="text-left px-5 py-5 flex flex-col gap-10">
            <h5 className="text-xl md:text-2xl xl:text-3xl font-srcpro font-medium">
              Ubifacil.
            </h5>
            <p className="text-zinc-700 md:text-lg xl:text-2xl max-w-2xl ">
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
              rel="noopener noreferrer"
              className="relative group w-fit font-srcpro"
            >
              <p className="bg-zinc-900 text-zinc-100 py-3 px-6 lg:text-lg xl:text-xl rounded-full transition-colors duration-200 hover:bg-zinc-800">
                Ver Proyecto
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
