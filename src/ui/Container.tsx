import styled from "styled-components";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { device } from "../utils/breakpoints";
import { getFinalPositions } from "../helpers/getFinalPositions";
import { Bubble1, Bubble2 } from "./BackgroundBubbles";
import ToasterComponent from "./ToasterComponent";

const StyledContainer = styled.main<{ $isProjectSection: boolean }>`
  position: relative;
  background-color: var(--color-grey-50);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 1.5rem; */
  position: relative;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.mobile} {
    padding: 0;
  }

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

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  const { pathname: path } = useLocation();

  const $isProjectSection = path === "/projects";

  const initialPositionForBubbles = { x: 0, y: 0 };

  return (
    <StyledContainer className="main" $isProjectSection={$isProjectSection}>
      <Bubble1
        initial={initialPositionForBubbles}
        animate={getFinalPositions(path)?.finalPositionForBubble1}
        transition={{ duration: 3, type: "spring" }}
      />
      <Bubble2
        initial={initialPositionForBubbles}
        animate={getFinalPositions(path)?.finalPositionForBubble2}
        transition={{ duration: 3, type: "spring" }}
      >
        HELLO
      </Bubble2>
      {children}
      <ToasterComponent />
    </StyledContainer>
  );
}

export default Container;
