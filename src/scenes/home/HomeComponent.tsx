import MyPhoto from "/images/my-photo.jpeg";
import Button from "../../ui/Button";
import Paragraph from "../../ui/Paragraph";
import { motion } from "framer-motion";
import BrandHeader from "../../ui/BrandHeader";
import StyledHome from "./styled-components/StyledHome";
import { useTranslation } from "react-i18next";

const NAME = "Darius Parfijanovičius";

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <StyledHome>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        src={MyPhoto}
      />
      <BrandHeader>{t("home-my-name-is")}</BrandHeader>
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
        {t("home-description")}
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
          {t("home-contact-me")}{" "}
          <span style={{ marginLeft: "0.3rem" }}>&rarr;</span>
        </Button>
      </motion.div>
    </StyledHome>
  );
}

export default HomeComponent;
