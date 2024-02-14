import styled from "styled-components";

const StyledAbout = styled.section`
  width: 80%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 544px) {
    margin-bottom: 9.8rem;
    gap: 5rem;
  }
`;

export default StyledAbout;
