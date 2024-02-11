import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { motion } from "framer-motion";

const Input = styled(motion.input)<{ $hasError?: boolean }>`
  font-size: 1.5rem;
  width: 100%;
  width: 100%;
  border: ${(props) =>
    props.$hasError
      ? "2px solid var(--color-red-700)"
      : "2px solid var(--color-grey-300)"};
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-sm);
  letter-spacing: 1.1px;
  transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: var(--color-grey-400);

    @media ${device.mobile} {
      font-size: 1.1rem;
    }
  }

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
    border: 2px solid var(--color-grey-300);
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-red-700);
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  bottom: -2.4rem;
`;

export { Input, ErrorMessage };
