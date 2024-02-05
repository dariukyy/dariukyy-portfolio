import { HiOutlineCollection, HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
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
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const xx = useMediaQuery("(max-width: 768px)");

  return (
    <NavList>
      <StyledNavLink to="/home">
        <HiOutlineHome />
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink to="/about">
        <HiOutlineUser />
        <span>About</span>
      </StyledNavLink>
      <StyledNavLink to="/skills">
        <HiOutlineCollection />
        <span>Skills</span>
      </StyledNavLink>
      <StyledNavLink to="/projects">
        <HiOutlineFolderOpen />
        <span>Projects</span>
      </StyledNavLink>
      <StyledNavLink to="/contact">
        <HiOutlineMail />
        <span>Contact</span>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
