import { motion } from "framer-motion";
import styled from "styled-components";

const StyledSkillItem = styled(motion.li)`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  border: 2px solid var(--color-grey-300);
  padding: 1rem 1.2rem;
  font-size: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  & svg {
    width: 2.1rem;
    height: 2.1rem;
  }
`;
export default StyledSkillItem;
