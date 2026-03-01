import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { cv } from "../assets/index";
import SplitType from "split-type";

const Home = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    let ctx = gsap.context(() => {
      const split = new SplitType(titleRef.current, { types: "words" });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(split.words, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      }).from(
        ".hero-content",
        {
          opacity: 0,
          x: -20,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.8",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      className="h-dvh bg-background text-text-primary flex flex-col justify-between py-20 overflow-hidden"
    >
      <div className="h-full flex justify-center md:justify-start flex-col px-8 xl:px-20 text-center md:text-start md:mt-30">
        <h1
          ref={titleRef}
          className="hero-title font-inter font-light uppercase text-5xl md:text-6xl lg:text-7xl xl:text-9xl leading-[0.85]  select-none"
        >
          JACQUELINE GOMEZ
        </h1>

        <div className="hero-content mt-10">
          <p className="font-srcpro text-text-primary/40 md:text-lg max-w-2xl tracking-[0.2em] capitalize">
            /* Transformo ideas complejas en interfaces simples y funcionales */
          </p>
        </div>
      </div>

      <div className="hero-content w-full px-8 xl:px-20 flex justify-center md:justify-between items-center md:items-end">
        <div className="flex gap-3 font-srcpro text-xs md:text-sm uppercase tracking-widest">
          <a
            href="https://github.com/JaGo-1"
            target="_blank"
            className="cursor-pointer-area"
          >
            GitHub
          </a>
          <span>/</span>
          <a
            href="https://linkedin.com/in/jacquelineegomez22/"
            target="_blank"
            className="cursor-pointer-area"
          >
            LinkedIn
          </a>
          <span>/</span>
          <a href={cv} download className="cursor-pointer-area">
            CV
          </a>
        </div>

        <p className="font-srcpro opacity-30 uppercase hidden md:block text-sm">
          2026 © V.02
        </p>
      </div>
    </section>
  );
};

export default Home;
