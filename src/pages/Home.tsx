import styled from "styled-components";
import MyPhoto from "../assets/my-photo.jpeg";
import Button from "../ui/Button";
import { device } from "../utils/breakpoints";
import Paragraph from "../ui/Paragraph";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // Changed from flex-start to space-around
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2rem;

  @media ${device.mobile} {
    gap: 3.2rem;
  }

  & h3 {
    color: var(--color-brand-500);
    font-weight: 700;
    letter-spacing: 0.8px;
    margin-top: 1.2rem;

    @media ${device.mobile} {
      font-size: 1.4rem;
    }
  }

  & h1 {
    @media ${device.mobile} {
      font-size: 2.2rem;
    }
  }

  & img {
    width: 26rem;
    height: 26rem;
    border-radius: 50%;
    box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.2);
    border: 1px solid var(--color-grey-50);
    filter: grayscale(90%);
    transition: all 0.3s;

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

function Home() {
  return (
    <StyledHome>
      <img src={MyPhoto} />
      <h3>My name is,</h3>
      <h1>Darius Parfijanovičius</h1>
      <Paragraph>
        I'm a frontend developer with a passion for learning and building
        innovative solutions. I specialize with technologies like React,
        TypeScript, styled-components and TailwindCSS.
      </Paragraph>
      <Button to="/contact" size="large">
        Get in touch
      </Button>
    </StyledHome>
  );
}

export default Home;
