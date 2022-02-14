import React from "react";
import classNames from "classnames";

const Column = ({ children, col }) => (
  <div className={classNames(col && `col-${col}`)}>{children}</div>
);

export default Column;
