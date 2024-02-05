import styled from "styled-components";
import { device } from "../utils/breakpoints";

const Paragraph = styled.p`
  font-size: 2.3rem;
  width: 70%;
  text-align: center;

  @media ${device.mobile} {
    font-size: 1.6rem;
    width: 100%;
  }
`;

export default Paragraph;
