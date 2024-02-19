import styled from "styled-components";

const ResponsiveComponent = styled.li<{ $isResponsive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  ${(props) =>
    props.$isResponsive
      ? `color: var(--color-green-100);`
      : `color: var(--color-red-800);`}

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    ${(props) =>
      props.$isResponsive
        ? `color: var(--color-green-100);`
        : `color: var(--color-red-800);`}
  }
  @media (max-width: 544px) {
    margin: 0;
  }
`;

export default ResponsiveComponent;
