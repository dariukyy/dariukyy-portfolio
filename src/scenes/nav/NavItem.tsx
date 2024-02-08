import { ReactNode } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

import StyledNavLink from "./styled-components/StyledNavLink";

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
