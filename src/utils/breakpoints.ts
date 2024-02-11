type Breakpoint = "mobile" | "tablet" | "desktop" | "smTablet";

type BreakpointValues = {
  [key in Breakpoint]: string;
};

export const breakpoints: BreakpointValues = {
  mobile: "480px",
  tablet: "800px",
  desktop: "1024px",
  smTablet: "768px",
};

export const device: BreakpointValues = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  smTablet: `(max-width: ${breakpoints.smTablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};
