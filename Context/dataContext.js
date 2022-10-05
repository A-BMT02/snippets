import React, { createContext, useContext, useState } from "react";

export const dataContext = createContext();

export const useData = () => {
  return useContext(dataContext);
};

export const DataContextProvider = (props) => {
  const [activeNavbar, setActiveNavbar] = useState("");

  const value = {
    activeNavbar,
    setActiveNavbar,
  };
  return (
    <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
  );
};
