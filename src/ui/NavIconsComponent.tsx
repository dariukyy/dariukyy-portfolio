import { HiDownload } from "react-icons/hi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogo } from "react-icons/pi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { useDarkMode } from "../context/DarkModeContext";
import ButtonIconComponent from "./ButtonIcon";
import PDF_URL from "../assets/my-pdf.pdf";

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
      <ButtonIconComponent href={PDF_URL} download>
        <HiDownload />
      </ButtonIconComponent>
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
