import styled from "styled-components";

const ProjectInfoBox = styled.div`
  display: flex;

  @media (max-width: 544px) {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: -0.8rem;
  }
`;

export default ProjectInfoBox;
