import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import SideBar from "./SideBar";
import useMediaQuery from "../hooks/useMediaQuery";

const StyledAppLayout = styled.div<{ $sideBarWidth: number }>`
  display: grid;
  grid-template-columns: ${(props) => props.$sideBarWidth}rem 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar outlet";
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const StyledSideBar = styled.aside`
  grid-area: sidebar;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  /* border: 1px solid var(--color-grey-50); */
`;

function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const SideBarWidth = isMobile ? 5 : 17;

  return (
    <StyledAppLayout $sideBarWidth={SideBarWidth}>
      <StyledSideBar>
        <SideBar />
      </StyledSideBar>
      <Container>
        <Outlet />
      </Container>
    </StyledAppLayout>
  );
}

export default AppLayout;
