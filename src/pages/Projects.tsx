import styled from "styled-components";
import { device } from "../utils/breakpoints";
import { CgMouse } from "react-icons/cg";
import { motion } from "framer-motion";
import { useComponentScroll } from "../hooks/useComponentScroll";
import { projectsData } from "../data/projects";
import Project from "../scenes/projects/Project";

const StyledProjects = styled.section`
  width: 90%;
  height: 100%;
  z-index: 2;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  overflow-y: scroll;
  padding-bottom: 4rem;
  position: relative;
`;

const ScrollDownComponent = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  & p {
    font-weight: 600;
    letter-spacing: 1.1px;
    font-size: 1.6rem;
    color: var(--color-grey-500);
    margin-left: 1rem;
  }

  & svg {
    font-weight: 600;
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

const Header = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-align: center;
  color: var(--color-brand-500);
  margin-top: 4rem;
  text-shadow: 3px 5px 9px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
`;

function Projects() {
  const { ref, isScrolled } = useComponentScroll();

  return (
    <StyledProjects ref={ref}>
      {!isScrolled && (
        <ScrollDownComponent>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <CgMouse />
          </motion.div>
          <p>Scroll down</p>
        </ScrollDownComponent>
      )}

      <Header>Projects</Header>
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </StyledProjects>
  );
}

export default Projects;
