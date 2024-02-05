import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogo } from "react-icons/pi";
import ButtonIconComponent from "./ButtonIcon";

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
