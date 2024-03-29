import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { motion } from "framer-motion";

const TextArea = styled(motion.textarea)<{ $hasError?: boolean }>`
  font-size: 1.5rem;
  min-height: 15rem;
  width: 100%;
  max-height: 50rem;
  border: ${(props) =>
    props.$hasError
      ? "2px solid var(--color-red-700)"
      : "2px solid var(--color-grey-300)"};
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-sm);
  resize: vertical;
  transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;

  @media ${device.mobile} {
    min-height: 5rem;
  }

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
    border: 2px solid var(--color-grey-300);
  }

  &::placeholder {
    color: var(--color-grey-400);

    @media ${device.mobile} {
      font-size: 1.1rem;
    }
  }
`;

export default TextArea;
