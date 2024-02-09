import styled from "styled-components";
import { device } from "../utils/breakpoints";

const Paragraph = styled.p`
  font-size: 2rem;
  width: 80%;
  text-align: center;
  letter-spacing: 1.4px;
  line-height: 2;
  color: var(--color-grey-700);
  margin-bottom: 1.5rem;

  @media ${device.mobile} {
    font-size: 1.8rem;
    width: 85%;
    letter-spacing: 1.6px;
    line-height: 1.6;
    padding: 0 1.6rem;
    margin-bottom: 3rem;
  }

  @media ${device.tablet} {
    line-height: 1.6;
    width: 90%;
  }

  @media ${device.smTablet} {
    width: 95%;
  }

  @media (min-width: 1600px) {
    width: 60%;
  }
`;

export default Paragraph;
