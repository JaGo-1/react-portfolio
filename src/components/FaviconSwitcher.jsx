import { useEffect } from "react";

const FaviconSwitcher = () => {
  useEffect(() => {
    const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const icon = document.getElementById("icon");

    const updateFavicon = (e) => {
      if (!icon) return;
      icon.href = e.matches ? "/logo-dark.svg" : "/logo-light.svg";
    };

    updateFavicon(darkScheme);
    darkScheme.addEventListener("change", updateFavicon);

    return () => {
      darkScheme.removeEventListener("change", updateFavicon);
    };
  }, []);

  return null;
};

export default FaviconSwitcher;
