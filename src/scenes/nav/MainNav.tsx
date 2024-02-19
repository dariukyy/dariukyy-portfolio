import styled from "styled-components";
import NavItem from "./NavItem";
import { navLinks } from "../../data/navLinks";
import { useTranslation } from "react-i18next";

const NavList = styled.ul`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

function MainNav() {
  const { t } = useTranslation();

  const translatedLinksData = navLinks.map((link) => ({
    ...link,
    label: t(link.label),
  }));
  return (
    <NavList>
      {translatedLinksData.map((link) => (
        <li style={{ width: "100%" }} key={link.id}>
          <NavItem
            to={link.to}
            id={link.id}
            icon={link.icon}
            label={link.label}
          />
        </li>
      ))}
    </NavList>
  );
}

export default MainNav;
