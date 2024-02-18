import styled from "styled-components";

const StyledNavIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media (max-width: 544px) {
    gap: 4rem;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;
export default StyledNavIcons;
