import styled from "styled-components";
import { device } from "../utils/breakpoints";

const Paragraph = styled.p`
  font-size: 2.3rem;
  width: 70%;
  text-align: center;
  letter-spacing: 1.4px;
  line-height: 2;

  @media ${device.mobile} {
    font-size: 1.6rem;
    width: 90%;
    letter-spacing: 1.6px;
    line-height: 1.6;
  }

  @media ${device.tablet} {
    line-height: 1.6;
    width: 90%;
  }

  @media ${device.smTablet} {
    width: 95%;
    font-size: 2rem;
  }
`;

export default Paragraph;
