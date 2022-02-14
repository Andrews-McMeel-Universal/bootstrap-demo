import React, { useRef, useEffect, useContext } from "react";
import classNames from "classnames";

const Row = ({ children, height }) => {
  return (
    <div
      className={classNames(
        "row",
        gx && gx > 1 && `gx-${gx}`,
        gx && gx === 0 && "g-0"
      )}
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default Row;
