import { SkillProp, skills } from "../../data/skills";
import SkillItem from "./SkilItem";
import SkillsBox from "./styled-components/SkillBox";
import StyledSkillsComponent from "./styled-components/StyledSkillsComponent";

function SkillsComponent() {
  return (
    <StyledSkillsComponent>
      <SkillsBox>
        {skills.map((skill) => (
          <SkillItem skill={skill as SkillProp} />
        ))}
      </SkillsBox>
    </StyledSkillsComponent>
  );
}

export default SkillsComponent;
