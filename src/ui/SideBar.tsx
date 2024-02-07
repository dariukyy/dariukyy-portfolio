import styled from "styled-components";
import MainNav from "./MainNav";
import NavIconsComponent from "./NavIconsComponent";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;
`;

function SideBar() {
  return (
    <SideBarContainer>
      <MainNav />
      <NavIconsComponent />
    </SideBarContainer>
  );
}

export default SideBar;
