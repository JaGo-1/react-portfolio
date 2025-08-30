import { useState } from "react";

const HoverTooltip = ({ icon: Icon, label, className = "" }) => {
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    setTooltip({
      x: e.clientX + 15,
      y: e.clientY + 15,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="relative inline-block">
      <Icon
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`transition hover:text-zinc-600 ${className}`}
      />
      {tooltip.visible && (
        <div
          className="fixed z-50 px-3 py-1 text-sm rounded-lg bg-zinc-900 text-white pointer-events-none shadow-lg transition-opacity duration-200"
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default HoverTooltip;
