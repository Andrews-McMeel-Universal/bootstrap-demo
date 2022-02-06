import React, { useContext } from "react";

import AdaptiveNoGuttersSection from "../sections/AdaptiveNoGuttersSection";
import AdaptiveSection from "../sections/AdaptiveSection";
import AdaptiveWithSidebarSection from "../sections/AdaptiveWithSidebarSection";
import HeadingSection from "../sections/HeadingSection";
import NavigationSection from "../sections/NavigationSection";
import ResponsiveNoGuttersSection from "../sections/ResponsiveNoGuttersSection";
import ResponsiveSection from "../sections/ResponsiveSection";
import ResponsiveWithSidebarSection from "../sections/ResponsiveWithSidebarSection";

import { AppContext } from "../../AppContextProvider";

const Main = () => {
  const { activeSection } = useContext(AppContext);

  return (
    <>
      <NavigationSection />

      {activeSection === "adaptive" && <AdaptiveSection />}

      {activeSection === "adaptive-no-gutters" && <AdaptiveNoGuttersSection />}

      {activeSection === "adaptive-with-sidebar" && (
        <AdaptiveWithSidebarSection />
      )}

      {activeSection === "responsive" && <ResponsiveSection />}

      {activeSection === "responsive-no-gutters" && (
        <ResponsiveNoGuttersSection />
      )}

      {activeSection === "responsive-with-sidebar" && (
        <ResponsiveWithSidebarSection />
      )}
    </>
  );
};

export default Main;
