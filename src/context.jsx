import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext({});
export const ContextProvider = ({ children }) => {
  
  const [toggle, setToggle] = useState(false);

  const value = {
  
    toggle,
    setToggle,
  };
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
};
