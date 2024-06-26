import styled from "styled-components";
import ProjectsContainer from "../scenes/projects/Projects";
import { device } from "../utils/breakpoints";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollDownIcon from "../scenes/projects/ScrollDownIcon";
import ProgressBar from "../ui/ProgressBar";
import ScrollToTop from "../ui/ScrollToTop";

const ScrollComponent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  overflow-y: scroll;
  behavior: smooth;
`;
const StyledProjects = styled.section`
  width: 90%;
  height: 100%;
  padding: 0 2rem;
  padding-bottom: 4rem;

  z-index: 2;
`;

const Header = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & h1 {
    font-size: 3.6rem;
    font-weight: 500;
    letter-spacing: 1.1px;
    text-align: center;
    color: var(--color-brand-500);
    margin-top: 4rem;
    text-shadow: 3px 5px 9px rgba(0, 0, 0, 0.2);
  }

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

function Projects() {
  const { t } = useTranslation();
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  return (
    <>
      <ProgressBar
        setScrollPercentage={setScrollPercentage}
        scrollPercentage={scrollPercentage}
      />
      <ScrollComponent className="ScrollComponent">
        <StyledProjects>
          <Header
            initial={{ y: -100, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1>{t("Projects")}</h1>
            <ScrollDownIcon />
          </Header>
          <ProjectsContainer />
        </StyledProjects>

        <AnimatePresence>
          {scrollPercentage > 10 && <ScrollToTop />}
        </AnimatePresence>
      </ScrollComponent>
    </>
  );
}

export default Projects;
