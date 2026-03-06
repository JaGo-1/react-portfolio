import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useLenis } from "lenis/react";
import { works } from "../data/workData";
import { useWorkAnimations } from "../hooks/useWorkAnimations";
import WorkInfo from "./work/WorkInfo";
import WorkGallery from "./work/WorkGallery";

const WorkDetails = () => {
  const lenis = useLenis();
  const { id } = useParams();
  const project = works.find((p) => p.id === id);

  const containerRef = useRef(null);
  const infoRef = useRef(null);

  useWorkAnimations(id, lenis, { infoRef, containerRef, project });

  if (!project)
    return (
      <div className="h-screen flex items-center justify-center text-white font-inter">
        Proyecto no encontrado
      </div>
    );

  return (
    <div className="work-details-page-wrapper w-full bg-background">
      <div
        ref={containerRef}
        className="flex flex-col xl:flex-row min-h-screen w-full relative pt-20 lg:pt-0"
      >
        <WorkInfo project={project} infoRef={infoRef} />
        <WorkGallery project={project} />
      </div>
    </div>
  );
};

export default WorkDetails;
