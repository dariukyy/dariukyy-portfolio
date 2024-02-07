import { ReactNode } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    /* justify-content: space-center; */
    gap: 1.2rem;
    width: 100%;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
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
    width: 2.4rem;
    height: 2.4rem;
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

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
}

function NavItem({ to, icon, label }: NavItemProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <StyledNavLink to={to}>
      {icon}
      {!isMobile && <span>{label}</span>}
    </StyledNavLink>
  );
}

export default NavItem;
