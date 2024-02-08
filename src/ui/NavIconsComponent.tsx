import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogo } from "react-icons/pi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { useDarkMode } from "../context/DarkModeContext";
import ButtonIconComponent from "./ButtonIcon";
import PDF_EN_URL from "../assets/Darius-Parfijanovičius-cv-en.pdf";
import PDF_LT_URL from "../assets/Darius-Parfijanovičius-CV-LT.pdf";
import Menus from "./Menus";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

// const ModalComponent = styled.div`
//   width: 30%;
//   height: 30%;
//   background-color: var(--color-grey-0);
// `;

const MenusIconAndText = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2.8rem;

  &:hover {
    background-color: var(--color-brand-100);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-700);
  }
`;

declare global {
  interface ImportMetaEnv {
    VITE_APP_GITHUB_URL: string;
    VITE_APP_LINKEDIN_URL: string;
  }
}

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_APP_LINKEDIN_URL;

function NavIconsComponent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <Menus>
        <Menus.Toggle id="toggleId" />
        <Menus.List id="toggleId">
          <li>
            <MenusIconAndText href={PDF_EN_URL} download>
              <FaRegFilePdf />
              <span>CV (EN)</span>
            </MenusIconAndText>
          </li>
          <li>
            <MenusIconAndText href={PDF_LT_URL} download>
              <FaRegFilePdf />
              <span>CV (LT)</span>
            </MenusIconAndText>
          </li>
        </Menus.List>
      </Menus>

      <ButtonIconComponent href={GITHUB_URL}>
        <PiGithubLogo />
      </ButtonIconComponent>
      <ButtonIconComponent href={LINKEDIN_URL}>
        <LiaLinkedinIn />
      </ButtonIconComponent>
      <ButtonIconComponent onClick={toggleDarkMode}>
        {!isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIconComponent>
    </>
  );
}

export default NavIconsComponent;
