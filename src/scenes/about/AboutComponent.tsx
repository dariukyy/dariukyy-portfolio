import { useState } from "react";
import StyledAbout from "./styled-components/StyledAbout";
import DescriptionBox from "./styled-components/DescriptionBox";
import OptionsContainer from "./styled-components/OptionsContainer";
import OptionItem from "./OptionItem";
import { aboutData } from "../../data/about";
import { useTranslation } from "react-i18next";

function AboutComponent() {
  const [active, setActive] = useState(aboutData[0].id);

  const { t } = useTranslation();

  const translatedAboutData = aboutData.map((item) => ({
    ...item,
    option: t(item.option),
    description: t(item.description),
  }));

  return (
    <StyledAbout>
      <OptionsContainer
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
      >
        {translatedAboutData.map((item) => (
          <OptionItem
            item={item}
            key={item.id}
            active={active}
            setActive={setActive}
          />
        ))}
      </OptionsContainer>

      <DescriptionBox
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.3,
          delay: 0.2,
        }}
      >
        {translatedAboutData.find((item) => item.id === active)?.description}
      </DescriptionBox>
    </StyledAbout>
  );
}

export default AboutComponent;
