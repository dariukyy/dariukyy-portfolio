import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectBoxTags = styled.ul`
  width: 50%;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.7px;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 883px) {
    width: 46%;
  }

  @media (max-width: 544px) {
    width: 100%;
    margin: 1.2rem 0;
  }
`;

export const ProjectTagItem = styled(motion.li)`
  padding: 0.4rem 1rem;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-brand-500);
  color: var(--color-grey-900);
  border: 2px solid var(--color-grey-200);
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-0.3rem) scale(1.04);
  }
`;
