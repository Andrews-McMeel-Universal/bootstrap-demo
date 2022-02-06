import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";

const Row = ({ children, height, noGutters }) => {
  return (
    <div
      className={classNames("row", noGutters && "g-0")}
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default Row;
