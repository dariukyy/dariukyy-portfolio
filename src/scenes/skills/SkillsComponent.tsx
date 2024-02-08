import styled from "styled-components";

import { SkillProp, skills } from "../../data/skills";

import SkillItem from "./SkilItem";

const StyledSkillsComponent = styled.section`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

const SkillsBox = styled.ul`
  width: 100%;
  /* height: 35%; */
  max-width: 75rem;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.4rem;
  gap: 2.1rem;
`;

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
