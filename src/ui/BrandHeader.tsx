import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

const StyledBrandHeader = styled(motion.h3)`
  color: var(--color-brand-500);
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: -2.5rem;
`;

type BrandHeaderProps = {
  children: ReactNode;
};

function BrandHeader({ children }: BrandHeaderProps) {
  return (
    <StyledBrandHeader
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      {children}
    </StyledBrandHeader>
  );
}

export default BrandHeader;
