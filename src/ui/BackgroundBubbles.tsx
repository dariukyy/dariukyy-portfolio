import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../utils/breakpoints";

export const Bubble1 = styled(motion.div)`
  position: absolute;
  background-color: var(--color-brand-200);
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  clip-path: circle(6.9% at 87.3% 71.9%);
  z-index: 1;
`;

export const Bubble2 = styled(motion.div)`
  height: 100%;
  width: 100%;
  background: var(--color-brand-200);
  position: absolute;
  top: 0;
  right: 0;
  clip-path: circle(8.9% at 14.3% 36.9%);
  z-index: 1;
  overflow: hidden;

  @media ${device.mobile} {
    clip-path: circle(7.9% at 15.3% 36.9%);
  }
`;
