import styled from "styled-components";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import { device } from "../utils/breakpoints";
import useSidebarWidth from "../hooks/useSideBarWidth";
import { getFinalPositions } from "../helpers/getFinalPositions";

const StyledContainer = styled.main<{ $isProjectSection: boolean }>`
  position: relative;
  background-color: var(--color-grey-50);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  position: relative;

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

const Bubble1 = styled(motion.div)`
  position: absolute;
  background-color: var(--color-brand-200);
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  clip-path: circle(6.9% at 87.3% 71.9%);
  z-index: 1;
`;

const Bubble2 = styled(motion.div)`
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

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  const sideBarWidth = useSidebarWidth();
  const { pathname: path } = useLocation();

  const $isProjectSection = path === "/projects";

  const initialPositionForBubbles = { x: 0, y: 0 };

  return (
    <StyledContainer $isProjectSection={$isProjectSection}>
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          marginLeft: sideBarWidth,
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </StyledContainer>
  );
}

export default Container;
