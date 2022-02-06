import React from "react";
import classNames from "classnames";

const Grid = ({ children, fluid }) => (
  <div className={classNames(fluid ? "container-fluid" : "container")}>
    {children}
  </div>
);

export default Grid;
