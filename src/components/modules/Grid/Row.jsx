import React, { useRef, useEffect, useContext } from "react";
import classNames from "classnames";

import { GridContext } from "./GridContext";

// const Row = ({ children, height, gy, gx }) => {
//   const { setPX } = useContext(GridContext);

//   useEffect(() => {
//     if (gx && gx > 1) {
//       setPX(gx - 1);
//     }
//   }, [gx, setPX]);

//   return (
//     <div
//       className={classNames(
//         "row",
//         gy !== undefined && `gy-${gy}`,
//         gx !== undefined && `gx-${gx}`
//       )}
//       style={{ height: `${height}px` }}
//     >
//       {children}
//     </div>
//   );
// };

const Row = ({ children, height }) => {
  const { gx } = useContext(GridContext);

  return (
    <div
      className={classNames("row", gx && `gx-${gx}`)}
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default Row;
