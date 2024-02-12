import styled from "styled-components";

const Description = styled.p`
  font-size: 1.3rem;
  height: 100%;
  width: 43%;
  font-weight: 400;
  letter-spacing: 0.7px;
  color: var(--color-grey-500);

  @media (max-width: 883px) {
    width: 46%;
  }
  @media (max-width: 544px) {
    width: 100%;
  }
`;
export default Description;
