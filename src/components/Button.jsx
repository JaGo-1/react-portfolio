import React from "react";

const Button = ({ text }) => {
  return (
    //   From Uiverse.io by cssbuttons-io
    <button className="learn-more relative inline-flex items-center w-55 h-12 cursor-pointer outline-none border-0 bg-transparent p-0 font-semibold uppercase tracking-wide text-gray-900 group overflow-hidden">
      {/* Círculo */}
      <span className="circle relative block w-12 h-12 bg-gray-900 rounded-full transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
        {/* Flecha */}
        <span className="icon arrow absolute top-1/2 left-2 w-4 h-[2px] bg-white -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-4">
          <span className="absolute top-[-4px] right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45"></span>
        </span>
      </span>
      {/* Texto */}
      <span className="font-srcpro button-text absolute inset-0 flex items-center justify-center ml-8 text-gray-900 transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default Button;
