const TechButton = ({ text }) => {
  return (
    <div className="bg-zinc-200 w-fit h-[50px] px-8 py-1 rounded-full flex justify-center items-center gap-3 relative">
      <p className="text-lg md:text-xl xl:text-2xl uppercase font-srcpro font-medium">
        {text}
      </p>
    </div>
  );
};

const About = () => {
  const STACK = [
    "html",
    "css",
    "javascript",
    "react.js",
    "tailwind.css",
    "node.js",
    "express",
    "sql",
    "git/github",
  ];
  return (
    <section className="bg-zinc-100">
      <div className="mx-auto grid lg:grid-cols-2 lg:gap-12 items-center gap-10">
        <p className="font-inter text-2xl lg:text-4xl xl:text-5xl font-light text-center px-5 max-w-xl m-auto">
          Actualmente trabajo con varias herramientas y lenguajes que me
          permiten crear sitios web y aplicaciones funcionales.
        </p>
        <div className="lg:bg-zinc-900 lg:h-[500px] flex flex-wrap items-center justify-center lg:justify-start px-10 lg:px-20 py-20 gap-5">
          {STACK.map((i, index) => (
            <TechButton key={index} text={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
