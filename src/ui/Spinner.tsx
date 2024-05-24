import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  to {
    transform: rotate(.5turn);
  }
`;

const Spinner = styled.div`
  width: 5.49rem;
  aspect-ratio: 1;
  --_c: no-repeat
    radial-gradient(farthest-side, var(--color-brand-500) 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  animation: ${rotation} 1s infinite;
`;

export default Spinner;
