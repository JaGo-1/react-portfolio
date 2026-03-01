import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Button } from "../components/Button";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { cv } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const Badge = ({ text }) => {
  return (
    <div className=" bg-text-primary/10 w-fit h-[40px] lg:h-[50px] px-6 lg:px-8 py-1 rounded-full flex justify-center items-center gap-3 relative">
      <p className="text-text-primary uppercase font-srcpro text-sm">{text}</p>
    </div>
  );
};
const About = () => {
  const STACK = ["react", "tailwind.css", "js/ts", "figma", "git/github"];
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useScrollReveal(containerRef, ".reveal-item", { stagger: 0.1 });

  useLayoutEffect(() => {
    if (!textRef.current) return;

    let ctx = gsap.context(() => {
      const split = new SplitType(textRef.current, {
        types: "chars, words",
      });

      gsap.fromTo(
        split.chars,
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className=" bg-background min-h-screen flex items-center"
    >
      <div className="flex flex-col px-8 xl:px-20 w-full">
        <div className="flex justify-between mb-12">
          <h5 className="section-title">[ about ]</h5>
          <h5 className="section-title">[ sl — arg ]</h5>
        </div>

        <p
          ref={textRef}
          className="font-srcpro text-text-primary text-3xl xl:text-5xl w-full md:w-2/3 leading-tight"
        >
          Soy Jacqueline, desarrolladora frontend y diseñadora UI. Construyo
          interfaces y productos digitales con código limpio y una experiencia
          de usuario que realmente aporta valor.
        </p>
        <div className="flex flex-wrap gap-10 gap-x-32 justify-between mt-16">
          <div className="reveal-item ">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-text-primary/30 font-srcpro uppercase tracking-[0.2em] text-xs whitespace-nowrap">
                Tech stack & tools
              </p>
              <div className="h-[1px] bg-text-primary/10 flex-grow max-w-[700px]"></div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-4 max-w-[650px]">
              {STACK.map((s, index) => (
                <Badge key={index} text={s} />
              ))}
            </div>
          </div>
          <div className="reveal-item ">
            <Button title="Descargar CV" href={cv} download />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
