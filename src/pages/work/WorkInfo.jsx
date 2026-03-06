import { LiaExternalLinkAltSolid } from "react-icons/lia";

const WorkInfo = ({ project, infoRef }) => {
  return (
    <aside
      ref={infoRef}
      className="w-full xl:w-[35%] h-auto xl:h-screen p-8 lg:p-12 xl:p-16 flex flex-col justify-center z-20 bg-background border-b xl:border-b-0 xl:border-r border-white/10"
    >
      <div className=" mx-auto xl:mx-0">
        <h2 className="section-title mb-4 animate-text">[ {project.type} ]</h2>

        <h1 className="text-text-primary font-inter text-5xl lg:text-7xl mb-6 uppercase animate-text">
          {project.title}
        </h1>

        <div className="animate-text flex gap-8 mb-10 uppercase font-srcpro text-xs tracking-widest text-text-primary/60 ">
          <a
            href={project.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300 border-b border-white/20 pb-1"
          >
            Live Demo <LiaExternalLinkAltSolid size={16} />
          </a>

          <a
            href={project.repoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300 border-b border-white/20 pb-1"
          >
            Source Code <LiaExternalLinkAltSolid size={16} />
          </a>
        </div>

        <p className="animate-text leading-relaxed text-text-primary/70 mb-12">
          {project.description}
        </p>

        <div className="animate-text grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-text-primary/60">
          <div className="space-y-2">
            <h4 className=" uppercase tracking-tighter font-semibold">
              Objetivo
            </h4>
            <p className="text-text-primary/80 leading-relaxed">
              {project.objective}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className=" uppercase tracking-tighter font-semibold">
              Solución
            </h4>
            <p className="text-text-primary/80 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="md:col-span-2 space-y-2">
            <h4 className=" uppercase tracking-tighter font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WorkInfo;
