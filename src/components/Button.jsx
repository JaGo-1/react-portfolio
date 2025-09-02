const Button = ({ text, variant = "light", href }) => {
  const variants = {
    light: {
      bgColor: "bg-zinc-900",
      textColor: "text-zinc-900",
      hoverTextColor: "group-hover:text-white",
      iconColor: "bg-white",
      arrowColor: "border-white",
    },
    dark: {
      bgColor: "bg-white",
      textColor: "text-white",
      hoverTextColor: "group-hover:text-zinc-900",
      iconColor: "bg-zinc-900",
      arrowColor: "border-zinc-900",
    },
  };

  const { bgColor, textColor, hoverTextColor, iconColor, arrowColor } =
    variants[variant];

  return (
    <a
      href={href}
      target="_blank"
      className={`learn-more relative inline-flex items-center w-55 h-12 cursor-pointer outline-none border-0 bg-transparent p-0 font-semibold uppercase tracking-wide ${textColor} group overflow-hidden`}
    >
      <span
        className={`circle relative block w-12 h-12 ${bgColor} rounded-full transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full`}
      >
        <span
          className={`icon arrow absolute top-1/2 left-2 w-4 h-[2px] ${iconColor} -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-4`}
        >
          <span
            className={`absolute top-[-4px] right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 ${arrowColor} rotate-45`}
          ></span>
        </span>
      </span>

      <span
        className={`font-srcpro button-text absolute inset-0 flex items-center justify-center ml-8 ${textColor} transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] ${hoverTextColor}`}
      >
        {text}
      </span>
    </a>
  );
};

export default Button;
