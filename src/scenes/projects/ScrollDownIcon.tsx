import { motion } from "framer-motion";
import { CgMouse } from "react-icons/cg";
import styled from "styled-components";

const ScrollDownComponent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  justify-content: center;
  align-items: center;

  & p {
    font-weight: 600;
    letter-spacing: 1.1px;
    font-size: 1.2rem;
    color: var(--color-grey-400);
    margin-left: 1rem;
  }

  & svg {
    font-weight: 600;
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-grey-400);
  }
`;

function ScrollDownIcon() {
  return (
    <ScrollDownComponent>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 16 }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <CgMouse />
      </motion.div>
      <p>Scroll down</p>
    </ScrollDownComponent>
  );
}

export default ScrollDownIcon;