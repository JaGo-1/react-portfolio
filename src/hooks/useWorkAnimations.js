import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../context/CursorContex.jsx";

gsap.registerPlugin(ScrollTrigger);

export const useWorkAnimations = (
  id,
  lenis,
  { infoRef, containerRef, project },
) => {
  const { mouseLeave } = useCursor();
  useEffect(() => {
    mouseLeave();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });
      tl.fromTo(
        ".animate-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 },
      );

      gsap.fromTo(
        ".animate-img",
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, stagger: 0.2 },
      );
    });

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, [id, lenis]);

  useEffect(() => {
    if (!project || !infoRef.current || !containerRef.current) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1280px)", () => {
      ScrollTrigger.create({
        trigger: infoRef.current,
        start: "top top",
        endTrigger: containerRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, [project, infoRef, containerRef]);
};
