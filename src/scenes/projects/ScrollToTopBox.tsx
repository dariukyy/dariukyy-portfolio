import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const StyledScrollToTopButton = styled(motion.div)`
  width: 100%;
  height: auto;
  z-index: 1000;
  /* display: flex;
  justify-content: flex-end;
  align-items: center; */
  /* margin-top: 2rem; */
  position: absolute;
  right: -80%;
  bottom: 2rem;
`;

const ToTopButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-brand-500);
  border: 2px solid var(--color-grey-300);
  box-shadow: var(--shadow-lg);

  &:hover {
    background-color: var(--color-brand-600);
  }

  & svg {
    width: 8rem;
    height: 8rem;
    color: var(--color-grey-200);

    &:hover {
      color: var(--color-grey-100);
    }
  }
`;

function ScrollToTopBox({ onClick }: { onClick: () => void }) {
  return (
    <StyledScrollToTopButton
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay: 0.5 }}
    >
      <ToTopButton onClick={onClick}>
        <IoIosArrowUp />
      </ToTopButton>
    </StyledScrollToTopButton>
  );
}

export default ScrollToTopBox;
