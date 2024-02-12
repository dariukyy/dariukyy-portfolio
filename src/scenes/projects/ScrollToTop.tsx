import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const StyledScrollToTopButton = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: flex-end;
  align-items: center; */
  margin-top: -4rem;
`;

const ToTopButton = styled.button`
  bottom: -2rem;
  right: 0rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-brand-500);
  border: 2px solid var(--color-grey-300);
  box-shadow: var(--shadow-lg);

  &:hover {
    background-color: var(--color-brand-600);
  }

  & svg {
    width: 10rem;
    height: 10rem;
    color: var(--color-grey-200);

    &:hover {
      color: var(--color-grey-100);
    }
  }
`;

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(window.top);
  };

  return (
    <StyledScrollToTopButton
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay: 0.5 }}
    >
      <ToTopButton onClick={handleClick}>
        <IoIosArrowUp />
      </ToTopButton>
    </StyledScrollToTopButton>
  );
}

export default ScrollToTopButton;
