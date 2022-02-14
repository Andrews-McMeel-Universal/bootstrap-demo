import React, { useState } from "react";
import classNames from "classnames";

const Grid = ({ children, fluid, gx, height }) => {
  return (
    <div
      className={classNames(fluid ? "container-fluid" : "container")}
      style={{ border: "1px solid #999" }}
    >
      <div
        className={classNames(
          "row",
          gx && gx >= 1 && `gx-${gx}`,
          gx === 0 && "g-0"
        )}
        style={{ height: `${height}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Grid;
