import React, { useState, useContext } from "react";
import classNames from "classnames";

import GridContextProvider, { GridContext } from "./GridContext";

// const Container = ({ children, fluid }) => {
//   const { pX } = useContext(GridContext);

//   return (
//     <div
//       className={classNames(
//         fluid ? "container-fluid" : "container",
//         pX && `px-${pX}`
//       )}
//       // style={{ border: "1px solid #999" }}
//     >
//       {children}
//     </div>
//   );
// };

// const Grid = ({ children, fluid }) => (
//   <GridContextProvider>
//     <Container fluid={fluid}>{children}</Container>
//   </GridContextProvider>
// );

import React, { createContext, useState } from "react";
import classNames from "classnames";

const GridContext = createContext();

const Grid = ({ children, fluid, gx }) => {
  // const [columnPaddingX, setColumnPaddingX] = useState(null);

  return (
    <GridContext.Provider value={{ gx }}>
      <div
        className={classNames(
          fluid ? "container-fluid" : "container",
          gx && `px-${gx - 1}`
        )}
        style={{ border: "1px solid #999" }}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};

export { GridContext };
export default Grid;

export default Grid;
