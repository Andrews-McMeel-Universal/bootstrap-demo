import React, { useContext } from "react";

import AdaptiveSection from "../sections/AdaptiveSection";
import AdaptiveWithSidebarSection from "../sections/AdaptiveWithSidebarSection";
import NavigationSection from "../sections/NavigationSection";
import ResponsiveSection from "../sections/ResponsiveSection";
import ResponsiveWithSidebarSection from "../sections/ResponsiveWithSidebarSection";

import { AppContext } from "../../AppContextProvider";

const Main = () => {
  const { activeSection } = useContext(AppContext);

  return (
    <>
      <NavigationSection />

      {activeSection === "adaptive" && <AdaptiveSection />}

      {activeSection === "adaptive-with-sidebar" && (
        <AdaptiveWithSidebarSection />
      )}

      {activeSection === "responsive" && <ResponsiveSection />}

      {activeSection === "responsive-with-sidebar" && (
        <ResponsiveWithSidebarSection />
      )}
    </>
  );
};

export default Main;
