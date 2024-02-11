import styled from "styled-components";
import { device } from "../utils/breakpoints";
import ProjectsContainer from "../scenes/projects/ProjectsComponent";

import ScrollDownIcon from "../scenes/projects/ScrollDownIcon";

const StyledProjects = styled.section`
  width: 90%;
  height: 100%;
  z-index: 2;
  padding: 0 2rem;
  overflow-y: scroll;
  padding-bottom: 4rem;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & h1 {
    font-size: 3.6rem;
    font-weight: 500;
    letter-spacing: 1.1px;
    text-align: center;
    color: var(--color-brand-500);
    margin-top: 4rem;
    text-shadow: 3px 5px 9px rgba(0, 0, 0, 0.2);
  }

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <Header>
        <h1>Projects</h1>
        <ScrollDownIcon />
      </Header>
      <ProjectsContainer />
    </StyledProjects>
  );
}

export default Projects;
