import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogo } from "react-icons/pi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa";

import { useDarkMode } from "../../context/DarkModeContext";

import Menus from "../../ui/Menus";
import ButtonIconComponent from "../../ui/ButtonIcon";
import PDF_EN_URL from "/Darius-Parfijanovičius-CV-EN.pdf";
import PDF_LT_URL from "/Darius-Parfijanovičius-CV-LT.pdf";
import MenusIconAndText from "./styled-components/MenusIconAndText";
import StyledNavIcons from "./styled-components/StyledNavIcons";

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
    <StyledNavIcons>
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
    </StyledNavIcons>
  );
}

export default NavIconsComponent;
