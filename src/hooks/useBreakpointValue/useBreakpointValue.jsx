import { useCallback, useEffect, useState } from "react";
import useBreakpoint from "../useBreakpoint";

import breakpoints from "../../utils/breakpoints";

const useBreakpointValue = () => {
  const [breakpoint, setBreakpoint] = useState("");

  const breakpointValues = Object.keys(breakpoints)
    .filter((item) => item.length <= 3)
    .reverse();

  const xxl = useBreakpoint("xxl");
  const xl = useBreakpoint("xl");
  const lg = useBreakpoint("lg");
  const md = useBreakpoint("md");
  const sm = useBreakpoint("sm");
  const xs = useBreakpoint("xs");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const activeBreakpoint = [xxl, xl, lg, md, sm, xs].findIndex(
        (item) => item === true
      );

      setBreakpoint(breakpointValues[activeBreakpoint]);
    }
  }, [xxl, xl, lg, md, sm, xs]);

  return breakpoint;
};

export default useBreakpointValue;
