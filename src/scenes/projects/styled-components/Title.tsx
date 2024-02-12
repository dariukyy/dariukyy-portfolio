import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  width: 100%;
  color: var(--color-grey-700);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 544px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 0.7rem;
  }
`;

export default Title;
