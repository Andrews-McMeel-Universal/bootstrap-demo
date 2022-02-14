// import React, { createContext, useState } from "react";

// const GridContext = createContext();

// const GridContextProvider = ({ children }) => {
//   const [pX, setPX] = useState(null);

//   return (
//     <GridContext.Provider value={{ pX, setPX }}>
//       {children}
//     </GridContext.Provider>
//   );
// };

// export { GridContext };
// export default GridContextProvider;

import React, { createContext, useState } from "react";
import classNames from "classnames";

const GridContext = createContext();

const Grid = ({ children, fluid, gx }) => {
  // const [columnPaddingX, setColumnPaddingX] = useState(null);

  return (
    <GridContext.Provider value={{ gx }}>
      <div
        className={classNames(
          fluid ? "container-fluid" : "container"
          // gx && `px-${gx - 1}`
        )}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};

export { GridContext };
export default Grid;
