import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; // Changed from flex-start to space-around
  align-items: center;

  gap: 2.8rem;
  z-index: 4;

  @media ${device.mobile} {
    gap: 3.2rem;
  }

  h1 {
    font-size: 4rem;
    color: var(--color-grey-700);
    text-shadow: 3px 5px 9px rgba(0, 0, 0, 0.2);

    @media ${device.mobile} {
      font-size: 3.2rem;
    }
  }

  & img {
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
    box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.2);
    border: 1px solid var(--color-grey-50);
    filter: grayscale(90%);

    @media ${device.mobile} {
      width: 20rem;
      height: 20rem;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.1);
    }
  }
`;
export default StyledHome;
