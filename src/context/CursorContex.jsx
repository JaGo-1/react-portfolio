import { createContext, useState, useContext } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("default");
  const [cursorText, setCursorText] = useState("");

  const mouseEnter = (type = "hover", text = "") => {
    setCursorType(type);
    setCursorText(text);
  };

  const mouseLeave = () => {
    setCursorType("default");
    setCursorText("");
  };

  return (
    <CursorContext.Provider
      value={{ cursorType, cursorText, mouseEnter, mouseLeave }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
