import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";

const Row = ({ children, height, noGutters }) => {
  return (
    <div
      className={classNames("row", noGutters && "g-0")}
      style={{ height: `${height}px`, border: "1px solid #999" }}
    >
      {children}
    </div>
  );
};

export default Row;
