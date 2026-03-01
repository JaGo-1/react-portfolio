export const Button = ({
  title,
  href,
  onClick,
  download,
  type = "button",
  className = "",
}) => {
  const Tag = href ? "a" : "button";

  const commonProps = {
    className: `inline-block cursor-pointer relative text-sm xl:text-xl py-4 px-10 
                text-white font-srcpro uppercase tracking-[0.2em] font-medium 
                overflow-hidden bg-zinc-900 transition-colors duration-500 
                ease-in-out hover:text-black z-10 group ${className}`,
  };

  const renderContent = () => (
    <>
      <span className="relative z-20">{title}</span>
      <div
        className="absolute top-0 -left-full w-full h-full bg-white 
                    transition-all duration-500 ease-in-out z-0 group-hover:left-0"
      ></div>
    </>
  );

  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button {...commonProps} type={type} onClick={onClick}>
      {renderContent()}
    </button>
  );
};
