import styled from "styled-components";
import { projectsData } from "../../data/projects";
import Project from "./Project";

const StyledProjects = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 6rem;
  padding-bottom: 2rem;
  justify-content: center;
  align-items: center;
`;

function Projects() {
  return (
    <StyledProjects>
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </StyledProjects>
  );
}

export default Projects;
