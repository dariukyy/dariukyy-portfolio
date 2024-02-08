import styled from "styled-components";
import MainNav from "./MainNav";
import NavIconsComponent from "./NavIconsComponent";

const StyledSideBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;
`;

function SideBar() {
  return (
    <StyledSideBarContainer id="sidebar">
      <MainNav />
      <NavIconsComponent />
    </StyledSideBarContainer>
  );
}

export default SideBar;
