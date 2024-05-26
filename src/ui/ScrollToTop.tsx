import { motion } from "framer-motion";
import { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import styled from "styled-components";
import { device } from "../utils/breakpoints";

const ScrollUpButton = styled(motion.button)`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  z-index: 1000;
  background-color: var(--color-brand-500);
  color: var(--color-white);
  width: 6rem;
  height: 6rem;
  border-radius: 30%;
  box-shadow: var(--shadow-md);
  border: none;

  @media ${device.mobile} {
    bottom: 2rem;
    right: 2rem;
  }

  & svg {
    width: 4rem;
    height: 4rem;
    color: #dcddf2;
  }
`;

function ScrollToTop() {
  const [isMounted, setIsMounted] = useState(true);

  function handleScrollToTop() {
    const scrollContainer = document.querySelector(".ScrollComponent");
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsMounted(false);
  }
  return (
    <>
      {isMounted && (
        <ScrollUpButton
          onClick={handleScrollToTop}
          initial={{ y: 100, opacity: 1 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{ y: 100, opacity: 0 }}
        >
          <TiArrowSortedUp />
        </ScrollUpButton>
      )}
    </>
  );
}

export default ScrollToTop;
