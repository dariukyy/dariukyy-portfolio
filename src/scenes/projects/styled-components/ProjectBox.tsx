import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectBox = styled(motion.li)`
  position: relative;
  width: 100%;
  min-height: 35rem;
  max-width: 60rem;
  height: auto;
  background-color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-radius: var(--border-radius-lg);
  padding: 1.5rem 2.3rem 2.3rem 2.3rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-md);
  overflow: hidden;

  @media (max-width: 883px) {
    padding: 1rem 1.8rem 1.8rem 1.8rem;
  }

  @media (max-width: 544px) {
    gap: 1rem;
    justify-content: flex-start;
    min-height: 53rem;
  }
`;
export default ProjectBox;
