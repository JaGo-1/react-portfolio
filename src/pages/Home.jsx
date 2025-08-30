import Button from "../components/Button";
import { imgDes } from "../assets";
const Home = () => {
  return (
    <section
      className="bg-zinc-100 text-zinc-800 px-8 lg:px-20 flex justify-between"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className=" text-center md:text-start flex flex-col items-center md:items-start justify-center">
        <div className=" flex flex-col gap-5 mb-5">
          <h3 className="font-inter text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Hi! I'm a
          </h3>
          <h1 className="font-srcpro md:max-w-xl max-w-5xl font-medium text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
            Software Developer
          </h1>
          <p className="font-inter md:text-xl xl:text-2xl md:max-w-xl max-w-2xl">
            I'm Jacqueline and I'm a software developer focused on front-end and
            design.
          </p>
        </div>
        <Button text="Let's connect" />
        <div className="flex justify-center md:justify-start gap-3 font-srcpro uppercase mt-20">
          <a>GitHub</a>
          <span>/</span>
          <a>LinkedIn</a>
          <span>/</span>
          <a>Download CV</a>
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
