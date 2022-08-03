import { Breakpoints, MediaQueries } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
};

export const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

export const mediaQueries: MediaQueries = {
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (max-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (max-width: ${breakpointMap.lg}px)`,
};

//gradient color
export const Colors = {
  start: '#3B09B9',
  end: '#9F3FFF',
  primary: '#FFFFFF'
}

export const FontSize = {
  xs: '10px',
  xm: '12px',
  sm: '14px',
  md: '16px',
  xl: '20px',
  xxl: '35px'
}