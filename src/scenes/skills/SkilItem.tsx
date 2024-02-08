import { SkillProp } from "../../data/skills";
import { motion } from "framer-motion";
import StyledSkillItem from "./styled-components/StyledSkillItem";

function SkillItem({ skill }: { skill: SkillProp }) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.07 * id,
      },
    }),
  };
  const Icon = skill.icon;
  return (
    <motion.div
      initial={fadeInAnimationVariants.initial}
      animate={fadeInAnimationVariants.animate(skill.id)}
      custom={skill.id}
    >
      <StyledSkillItem
        whileHover={{
          y: -4,
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        whileTap={{ y: -4, scale: 1.05, transition: { duration: 0.3 } }}
        key={skill.id}
      >
        <Icon style={{ color: skill.color, fill: skill.fill }} />
        <span>{skill.skill}</span>
      </StyledSkillItem>
    </motion.div>
  );
}

export default SkillItem;
