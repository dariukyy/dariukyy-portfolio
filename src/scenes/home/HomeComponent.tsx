import MyPhoto from "/images/my-photo.jpeg";
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        src={MyPhoto}
      />
      <BrandHeader>My name is,</BrandHeader>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        {NAME}
      </motion.h1>
      <Paragraph
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        {DESCRIPTION}
      </Paragraph>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{
          type: "tween",
          duration: 0.3,
          delay: 0.4,
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
