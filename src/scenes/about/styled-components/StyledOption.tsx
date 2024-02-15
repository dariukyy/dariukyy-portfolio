import styled, { css } from "styled-components";

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
