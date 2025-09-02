import Button from "../components/Button";
import { imgDes, cv } from "../assets";

const Home = () => {
  return (
    <section
      className="bg-zinc-100 text-zinc-800 px-8 lg:px-20 flex justify-between"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className=" w-full text-center md:text-start flex flex-col items-center md:items-start justify-center">
        <div className=" flex flex-col gap-5 mb-5">
          <h3 className="font-inter text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Jacqueline Gomez
          </h3>
          <h1 className="font-srcpro font-medium text-4xl md:text-5xl xl:text-8xl 2xl:text-9xl max-w-3xl">
            Full-stack Developer
          </h1>
          <p className="font-inter md:text-xl xl:text-2xl md:max-w-xl max-w-2xl">
            Transformo ideas en software funcional y profesional.
          </p>
        </div>
        <Button
          text="Contáctame"
          href="https://www.linkedin.com/in/jacquelineegomez22/"
        />
        <div className="flex flex-wrap justify-center md:justify-start gap-3 font-srcpro uppercase mt-20">
          <a href="https://github.com/JaGo-1" target="_blank">
            GitHub
          </a>
          <span>/</span>
          <a
            href="https://www.linkedin.com/in/jacquelineegomez22/"
            target="_blank"
          >
            LinkedIn
          </a>
          <span>/</span>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            Descargar CV
          </a>
        </div>
      </div>

      <img
        src={imgDes}
        alt="ilustracion"
        className="hidden md:block w-60 lg:w-80 xl:w-110"
      />
    </section>
  );
};

export default Home;
