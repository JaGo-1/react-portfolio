import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { useCursor } from "../context/CursorContex";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const { cursorType, cursorText, mouseEnter, mouseLeave } = useCursor();

  useLayoutEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const selector = "a, button, .cursor-pointer-area, [data-cursor-text]";
    const handleMouseOver = (e) => {
      const target = e.target.closest(selector);

      if (target) {
        const customText = target.getAttribute("data-cursor-text") || "";
        mouseEnter("hover", customText);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(selector);
      if (target) {
        mouseLeave();
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseEnter, mouseLeave]);

  useLayoutEffect(() => {
    const isHover = cursorType === "hover";
    gsap.to(cursorRef.current, {
      width: isHover ? 80 : 16,
      height: isHover ? 80 : 16,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [cursorType]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 mix-blend-difference bg-white rounded-full"
    >
      {cursorText && (
        <span className="text-[10px] text-black font-bold uppercase tracking-tighter">
          {cursorText}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
