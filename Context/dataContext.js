import React, { createContext, useContext } from "react";
import { useRouter } from "next/router";
import { getNavByPath } from "../helper/navigations";

export const dataContext = createContext();

export const useData = () => {
  return useContext(dataContext);
};

export const DataContextProvider = (props) => {
  const router = useRouter();
  const activeNavbar = getNavByPath(router.asPath);
  const value = { activeNavbar };

  return (
    <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
  );
};
