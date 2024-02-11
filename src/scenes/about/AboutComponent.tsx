import { useState } from "react";
import StyledAbout from "./styled-components/StyledAbout";
import DescriptionBox from "./styled-components/DescriptionBox";
import OptionsContainer from "./styled-components/OptionsContainer";
import MotionDiv from "./styled-components/MotionDiv";
import OptionItem from "./OptionItem";
import { aboutData } from "../../data/about";

function AboutComponent() {
  const [active, setActive] = useState(aboutData[0].id);
  const activeItem = aboutData.find((item) => item.id === active);

  return (
    <StyledAbout>
      <MotionDiv>
        <OptionsContainer>
          {aboutData.map((item) => (
            <OptionItem
              item={item}
              key={item.id}
              active={active}
              setActive={setActive}
            />
          ))}
        </OptionsContainer>
      </MotionDiv>
      <DescriptionBox
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.3,
          delay: 0.2,
        }}
      >
        {activeItem?.description}
      </DescriptionBox>
    </StyledAbout>
  );
}

export default AboutComponent;
