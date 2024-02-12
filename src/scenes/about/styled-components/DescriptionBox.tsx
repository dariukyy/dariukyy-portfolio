import styled from "styled-components";
import { device } from "../../../utils/breakpoints";
import { motion } from "framer-motion";

const DescriptionBox = styled(motion.div)`
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  padding: 2.4rem 3.2rem 3.2rem;
  max-width: 60rem;
  height: auto;
  letter-spacing: 0.9px;
  line-height: 2;
  font-weight: 500;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  z-index: 2;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  &::before {
    content: "";
    position: absolute;
    bottom: -11rem;
    right: -2rem;
    z-index: -1;
    background-color: var(--color-brand-500);
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }

  @media ${device.mobile} {
    width: 100%;
    letter-spacing: 0.6px;
    line-height: 1.7;
    font-size: 1.3rem;
    padding: 1.2rem 2rem 2rem;
  }
`;
export default DescriptionBox;
