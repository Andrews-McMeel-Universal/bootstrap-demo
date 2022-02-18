import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import breakpoints from "../../utils/breakpoints";

const useBreakpoint = (min, max = min) => {
  const [isClient, setIsClient] = useState(false);
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  // Determine if the viewport fits within the desired breakpoint range
  const { minWidth } = breakpoints[min];
  const { maxWidth } = breakpoints[max];
  const matchesQuery = useMediaQuery({ minWidth, maxWidth });

  useEffect(() => {
    // Check if this is client-side or server-side, because only the
    // client has a viewport
    setIsClient(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    // Get the size of the client's viewport and check the breakpoint
    if (isClient) {
      setIsBreakpoint(matchesQuery);
    }
  }, [isClient, matchesQuery]);

  return isBreakpoint;
};

export default useBreakpoint;
