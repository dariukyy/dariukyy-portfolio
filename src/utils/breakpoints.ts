type Breakpoint = "mobile" | "tablet" | "desktop" | "smTablet";

type BreakpointValues = {
  [key in Breakpoint]: string;
};

export const breakpoints: BreakpointValues = {
  mobile: "480px",
  tablet: "769px",
  desktop: "1024px",
  smTablet: "600px",
};

export const device: BreakpointValues = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  smTablet: `(max-width: ${breakpoints.smTablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};
