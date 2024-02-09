import MyPhoto from "../../assets/my-photo.jpeg";
import Button from "../../ui/Button";
import Paragraph from "../../ui/Paragraph";
import { motion } from "framer-motion";
import BrandHeader from "../../ui/BrandHeader";
import StyledHome from "./styled-components/StyledHome";

const NAME = "Darius Parfijanovičius";
const DESCRIPTION =
  "I'm a junior frontend developer with a passion for learning and building innovative solutions. I specialize with technologies like React, Redux, TypeScript, styled-components and TailwindCSS.";

function HomeComponent() {
  return (
    <StyledHome>
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.4,
        }}
        src={MyPhoto}
      />
      <BrandHeader>My name is,</BrandHeader>
      <h1>{NAME}</h1>
      <Paragraph>{DESCRIPTION}</Paragraph>
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.25 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.7,
        }}
      >
        <Button to="/contact" size="large">
          Contact me <span style={{ marginLeft: "0.3rem" }}>&rarr;</span>
        </Button>
      </motion.div>
    </StyledHome>
  );
}

export default HomeComponent;
