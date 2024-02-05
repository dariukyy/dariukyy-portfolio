import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  padding: 0 2.4rem;
  width: 100%;
  height: 5rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-grey-50);
`;

function Header() {
  const location = useLocation();

  const path =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  console.log(path);

  return (
    <StyledHeader>
      {path}
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
