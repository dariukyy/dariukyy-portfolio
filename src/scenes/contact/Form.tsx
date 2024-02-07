import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const Form = styled.form`
  max-width: 60rem;
  width: 100%;
  background-color: var(--color-grey-100);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-lg);
`;

const FormGroup = styled.div`
  width: 90%;
  max-height: 80%;
  position: relative;
`;

const FormHeader = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-align: center;
  color: var(--color-brand-500);
  text-shadow: 3px 5px 9px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export { Form, FormGroup, FormHeader };
