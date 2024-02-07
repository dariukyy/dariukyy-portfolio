import { HiOutlineCollection, HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavList = styled.ul`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  /* align-items: */
`;

function MainNav() {
  // const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <NavList>
      <NavItem to="/home" icon={<HiOutlineHome />} label="Home" />
      <NavItem to="/about" icon={<HiOutlineUser />} label="About" />
      <NavItem to="/skills" icon={<HiOutlineCollection />} label="Skills" />
      <NavItem to="/projects" icon={<HiOutlineFolderOpen />} label="Projects" />
      <NavItem to="/contact" icon={<HiOutlineMail />} label="Contact" />
    </NavList>
  );
}

export default MainNav;
