import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogo } from "react-icons/pi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa";

import { useDarkMode } from "../../context/DarkModeContext";

import Menus from "../../ui/Menus";
import ButtonIconComponent from "../../ui/ButtonIcon";
import PDF_EN_URL from "/CV/Darius-Parfijanovičius-CV-EN.pdf";
import PDF_LT_URL from "/CV/Darius-Parfijanovičius-CV-LT.pdf";
import MenusIconAndText from "./styled-components/MenusIconAndText";
import StyledNavIcons, { IconsBox } from "./styled-components/StyledNavIcons";
import LanguageButtonText from "../../ui/LanguageButtonText";

declare global {
  interface ImportMetaEnv {
    VITE_APP_GITHUB_URL: string;
    VITE_APP_LINKEDIN_URL: string;
  }
}

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_APP_LINKEDIN_URL;

function NavIconsComponent() {
  const { isDarkMode, toggleDarkMode, englishLanguage, toggleLanguage } =
    useDarkMode();

  return (
    <StyledNavIcons>
      <IconsBox>
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
      </IconsBox>
      <IconsBox>
        <ButtonIconComponent onClick={toggleLanguage}>
          <LanguageButtonText>
            {!englishLanguage ? "LT" : "EN"}
          </LanguageButtonText>
        </ButtonIconComponent>
        <ButtonIconComponent onClick={toggleDarkMode}>
          {!isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIconComponent>
      </IconsBox>
    </StyledNavIcons>
  );
}

export default NavIconsComponent;
