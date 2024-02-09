import { IconType } from "react-icons";
import useMediaQuery from "../../hooks/useMediaQuery";

import StyledNavLink from "./styled-components/StyledNavLink";

interface NavItemProps {
  id: number;
  to: string;
  icon: IconType;
  label: string;
}

function NavItem({ to, icon: Icon, label }: NavItemProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <StyledNavLink to={to}>
      <Icon />
      {!isMobile && <span>{label}</span>}
    </StyledNavLink>
  );
}

export default NavItem;
