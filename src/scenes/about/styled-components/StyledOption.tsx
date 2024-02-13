import styled, { css } from "styled-components";
import { device } from "../../../utils/breakpoints";

type StyledOptionProps = {
  $activeClass: boolean;
};

const StyledOption = styled.button<StyledOptionProps>`
  background-color: var(--color-grey-100);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0.6rem 1rem;
  transition: all 0.3s ease 0s;

  /* @media ${device.mobile} {
    font-size: 1.5rem;
  } */

  &:hover {
    background-color: var(--color-brand-500);
    color: var(--color-grey-0);
  }

  ${(props) =>
    props.$activeClass &&
    css`
      background-color: var(--color-brand-500);
      color: var(--color-grey-0);
    `}
`;

export default StyledOption;
