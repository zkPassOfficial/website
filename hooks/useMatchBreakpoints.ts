import { useEffect, useLayoutEffect, useState } from "react";
import { breakpointMap } from "theme/constants";

type State = {
  [key: string]: boolean;
}

type BreakpointChecks = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} & State;

type MediaQueries = {
  [key: string]: string;
};

const useIsomorphicEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const mediaQueries: MediaQueries = (() => {
  let prevMinWidth = 0;

  return Object.keys(breakpointMap).reduce((accum, size, index) => {
    // Largest size is just a min-width of second highest max-width
    if (index === Object.keys(breakpointMap).length - 1) {
      return { ...accum, [size]: `(min-width: ${prevMinWidth}px)` };
    }

    const minWidth = prevMinWidth;
    const breakpoint = breakpointMap[size];

    // Min width for next iteration
    prevMinWidth = breakpoint + 1;

    return { ...accum, [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint}px)` };
  }, {});
})();


const getKey = (size: string) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`;

const getState = () => {
  const s = Object.keys(mediaQueries).reduce((accum, size) => {
    const key = getKey(size);
    if (typeof window === "undefined") {
      return {
        ...accum,
        [key]: false,
      };
    }
    const mql = window.matchMedia(mediaQueries[size]);
    return { ...accum, [key]: mql?.matches ?? false };
  }, {});
  return s;
};



const useMatchBreakpoints = (): BreakpointChecks => {
  const [state, setState] = useState<State>(() => getState());

  useIsomorphicEffect(() => {
    // Create listeners for each media query returning a function to unsubscribe
    const handlers = Object.keys(mediaQueries).map((size) => {
      const mql = window.matchMedia(mediaQueries[size]);

      const handler = (matchMediaQuery: MediaQueryListEvent) => {
        const key = getKey(size);
        setState((prevState) => ({
          ...prevState,
          [key]: matchMediaQuery.matches,
        }));
      };

      // Safari < 14 fix
      if (mql.addEventListener) {
        mql.addEventListener("change", handler);
      }

      return () => {
        // Safari < 14 fix
        if (mql.removeEventListener) {
          mql.removeEventListener("change", handler);
        }
      };
    });

    setState(getState());

    return () => {
      handlers.forEach((unsubscribe) => {
        unsubscribe();
      });
    };
  }, []);

  return {
    ...state,
    isMobile: state.isXs || state.isSm,
    isTablet: state.isMd || state.isXs || state.isSm,
    isDesktop: state.isXl || state.isXxl,
  };
};

export default useMatchBreakpoints;
