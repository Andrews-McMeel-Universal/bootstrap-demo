import React, { useContext } from "react";
import classNames from "classnames";

import { AppContext } from "../../../AppContextProvider";

const Item = ({ children, section }) => {
  const { activeSection, setActiveSection } = useContext(AppContext);

  return (
    <button
      className={classNames(
        "btn btn-sm btn-secondary",
        section === activeSection && "active"
      )}
      onClick={() => setActiveSection(section)}
      style={{ fontSize: "1.6rem" }}
    >
      {children}
    </button>
  );
};

export default Item;
