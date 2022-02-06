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
      key: "adaptive-no-gutters",
      label: "Adaptive (No Gutters)",
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
      key: "responsive-no-gutters",
      label: "Responsives (No Gutters)",
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
