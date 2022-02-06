import React, { useContext } from "react";

import Heading from "../commons/Heading";

import { AppContext } from "../../AppContextProvider";

const NavigationSection = () => {
  const { activeSection } = useContext(AppContext);

  return (
    <div className="container" style={{ marginBottom: "30px" }}>
      <div className="row">
        <div className="col-12">
          <Heading priority={2}>{activeSection}</Heading>
        </div>
      </div>
    </div>
  );
};

export default NavigationSection;
