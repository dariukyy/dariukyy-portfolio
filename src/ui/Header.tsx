import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledHeader = styled(motion.div)`
  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 999;

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

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const { t } = useTranslation();

  const headerString = path.slice(1).charAt(0).toUpperCase() + path.slice(2);

  return (
    <StyledHeader
      initial={{ y: -100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h1>{t(headerString)}</h1>
    </StyledHeader>
  );
}

export default Header;
