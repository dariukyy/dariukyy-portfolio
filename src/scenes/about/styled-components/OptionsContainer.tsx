import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

const OptionsContainer = styled.ul`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem;
  display: flex;
  gap: 3rem;
  justify-content: space-around;

  @media ${device.mobile} {
    gap: 0.5rem;
    justify-content: space-between;
  }
`;

export default OptionsContainer;
