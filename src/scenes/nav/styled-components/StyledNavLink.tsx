import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    width: 100%;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2rem;
    transition: all 0.3s;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-brand-100);
    border-radius: var(--border-radius-sm);

    @media (max-width: 768px) {
      border-radius: var(--border-radius-sm);
    }
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-700);
  }
`;
export default StyledNavLink;
