import Card from "../components/Card";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".work-card-container");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const works = [
    {
      title: "00. rawframe",
      type: "landing page",
      img: "",
    },
  ];
  return (
    <section className="w-full bg-background">
      <div id="proyectos" className="px-8 xl:px-20 py-20 md:py-30">
        <div className="flex justify-between mb-12">
          <h5 className="section-title">[ Work ]</h5>
          <h5 className="section-title">{`[ 0 ... ${works.length - 1} ]`}</h5>
        </div>
        <div
          ref={containerRef}
          className="flex flex-col gap-16 md:gap-24 w-full"
        >
          {works.map((p, index) => (
            <div
              key={index}
              className={`work-card-container ${
                index % 2 === 0 ? "self-start" : "self-end"
              } w-full md:w-1/2`}
            >
              <Card {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
