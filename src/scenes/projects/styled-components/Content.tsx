import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 544px) {
    gap: 1rem;
  }
`;

export default Content;
