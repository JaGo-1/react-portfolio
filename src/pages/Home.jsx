import { cv } from "../assets";
import Button from "../components/Button";

const Home = () => {
  return (
    <section className="h-dvh bg-background text-text-primary  flex justify-between">
      <div className=" w-full text-center md:text-start flex flex-col gap-5 items-center md:items-start justify-between py-20">
        <div className="h-full flex justify-center flex-col gap-10 mb-5 px-8 xl:px-20">
          <h1 className="flex flex-col md:flex-row gap-4 font-anton-regular uppercase font-medium text-6xl md:text-5xl xl:text-8xl 2xl:text-11xl">
            <span>Frontend</span>
            <span className="text-secondary hidden md:inline text-2xl md:text-4xl xl:text-7xl 2xl:text-9xl leading-none">
              ✦
            </span>
            <span>Developer</span>
          </h1>
          <p className="xl:mt-10 font-srcpro text-text-primary/60 md:text-xl xl:text-4xl md:max-w-2xl max-w-xl tracking-widest font-light">
            ¡Hola! Soy Jacqueline, Frontend Developer y Diseñadora UI.
          </p>
        </div>

        <div className="w-full space-y-10">
          <div className="flex justify-center md:justify-between w-full px-8 xl:px-20 tracking-wider">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 font-srcpro uppercase mt-20">
              {/* <div>
                <a href="https://github.com/JaGo-1" target="_blank">
                  GitHub
                </a>
              </div>

              <a
                href="https://www.linkedin.com/in/jacquelineegomez22/"
                target="_blank"
              >
                LinkedIn
              </a> */}
              {/* <div className="border border-white/30 rounded-full px-6 py-3">
                <a href={cv} target="_blank" rel="noopener noreferrer">
                  Descargar CV
                </a>
              </div> */}
              <Button to={cv} title="Descargar CV" />
            </div>
            {/* <div className="hidden md:flex flex-wrap justify-center md:justify-start gap-3 font-srcpro uppercase mt-20">
              <p>UI Design</p>
              <span>/</span>
              <p>Frontend</p>
              <span>/</span>
              <p>Responsive</p>
            </div> */}
            <div className="hidden md:flex flex-wrap items-end justify-center md:justify-start gap-3 font-srcpro uppercase mt-20">
              <p>Modern</p>
              <span>/</span>
              <p>Creative</p>
              <span>/</span>
              <p>Quality</p>
            </div>
          </div>
          {/* <div className="w-full border-t border-white/30"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
