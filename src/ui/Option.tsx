import { type ReactNode } from "react";
import styled, { css } from "styled-components";
import { type AboutItem } from "../data/about";
import { device } from "../utils/breakpoints";

type StyledOptionProps = {
  activeClass: boolean;
};

const StyledOption = styled.button<StyledOptionProps>`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s ease 0s;

  @media ${device.mobile} {
    font-size: 1.3rem;
  }

  &:hover {
    background-color: var(--color-brand-500);
    color: var(--color-grey-0);
  }

  ${(props) =>
    props.activeClass &&
    css`
      background-color: var(--color-brand-500);
      color: var(--color-grey-0);
    `}
`;

type OptionProps = {
  children: ReactNode;
  active: number;
  onClick: () => void;
  item: AboutItem;
};

function Option({ children, active, onClick, item }: OptionProps) {
  console.log(active, item.id);
  const activeClass = active === item.id;
  return (
    <StyledOption activeClass={activeClass} onClick={onClick}>
      {children}
    </StyledOption>
  );
}

export default Option;
