import React, { useContext } from "react";

import Item from "./Item";

import { AppContext } from "../../../AppContextProvider";

const Navigation = () => {
  const { sections } = useContext(AppContext);

  return (
    <nav className="btn-group">
      {sections.map((section) => (
        <Item key={section.key} section={section.key}>
          {section.label}
        </Item>
      ))}
    </nav>
  );
};

export default Navigation;
