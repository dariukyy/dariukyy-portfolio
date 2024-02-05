import styled from "styled-components";
import { device } from "../utils/breakpoints";

const Container = styled.main`
  position: relative;
  background-color: var(--color-grey-50);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    height: 100%;
    width: 100%;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--color-brand-200) /* Your first background here */;
    clip-path: polygon(100% 86%, 29% 100%, 101% 100%);
    z-index: 1;

    @media ${device.mobile} {
      clip-path: polygon(100% 86%, 8% 100%, 101% 100%);
    }
  }

  &::after {
    background: var(--color-brand-200);
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;

    clip-path: polygon(100% 25%, 34% 0, 100% 0);
    z-index: 1;
  }
`;

export default Container;
