type Breakpoint = "mobile" | "tablet" | "desktop";

type BreakpointValues = {
  [key in Breakpoint]: string;
};

export const breakpoints: BreakpointValues = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const device: BreakpointValues = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};
