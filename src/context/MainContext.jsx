import React, { createContext, useContext, useEffect, useState } from "react";

const mainContext = createContext();

export function useMainContext() {
  return useContext(mainContext);
}

function MainContext({ children }) {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {}, [inputValue]);

  const value = { inputValue, setInputValue };
  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
}

export default MainContext;
