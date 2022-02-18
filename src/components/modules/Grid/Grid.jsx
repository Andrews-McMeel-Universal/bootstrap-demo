import React from "react";
import classNames from "classnames";

import useBreakpoint from "../../../hooks/useBreakpoint";

const Grid = ({ children, fluid, height, mb }) => {
  const smallGutters = useBreakpoint("xs", "md");
  const isXS = useBreakpoint("xs");

  return (
    <div
      className={classNames(
        fluid ? "container-fluid" : "container",
        isXS && "px-6",
        mb && `mb-${mb}`
      )}
      style={{ border: "1px solid #999" }}
    >
      <div
        className={classNames("row", smallGutters && "gx-2")}
        style={{ height: `${height}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Grid;
