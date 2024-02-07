import { ReactNode } from "react";
import styled from "styled-components";

const StyledBrandHeader = styled.h3`
  color: var(--color-brand-500);
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: -2.5rem;
`;

type BrandHeaderProps = {
  children: ReactNode;
};

function BrandHeader({ children }: BrandHeaderProps) {
  return <StyledBrandHeader>{children}</StyledBrandHeader>;
}

export default BrandHeader;
