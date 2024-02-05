import styled from "styled-components";
import MainNav from "./MainNav";
import DarkModeToggle from "./DarkModeToggle";

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
      <DarkModeToggle />
    </SideBarContainer>
  );
}

export default SideBar;
