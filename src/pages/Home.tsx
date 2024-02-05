import styled from "styled-components";
import MyPhoto from "../assets/my-photo.jpeg";
import Button from "../ui/Button";
import { device } from "../utils/breakpoints";
import Paragraph from "../ui/Paragraph";
import { motion } from "framer-motion";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // Changed from flex-start to space-around
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 4rem;
  z-index: 2;

  @media ${device.mobile} {
    gap: 3.2rem;
  }

  & h3 {
    color: var(--color-brand-500);
    font-weight: 700;
    letter-spacing: 0.8px;
    margin-bottom: -2.5rem;
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

function Home() {
  return (
    <StyledHome>
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.2,
        }}
        src={MyPhoto}
      />
      <motion.h3>My name is,</motion.h3>

      <h1>Darius Parfijanovičius</h1>
      <Paragraph>
        I'm a junior frontend developer with a passion for learning and building
        innovative solutions. I specialize with technologies like React, Redux,
        TypeScript, styled-components and TailwindCSS.
      </Paragraph>
      <Button to="/contact" size="large">
        Get in touch
      </Button>
    </StyledHome>
  );
}

export default Home;
