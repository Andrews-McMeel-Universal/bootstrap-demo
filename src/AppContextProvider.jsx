import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("adaptive");

  const sections = [
    {
      key: "adaptive",
      label: "Adaptive",
    },
    {
      key: "adaptive-with-sidebar",
      label: "Adaptive with Sidebar",
    },
    {
      key: "responsive",
      label: "Responsive",
    },
    {
      key: "responsive-with-sidebar",
      label: "Responsive with Sidebar",
    },
  ];

  return (
    <AppContext.Provider value={{ activeSection, sections, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppContextProvider;
