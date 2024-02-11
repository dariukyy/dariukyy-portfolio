import { IconType } from "react-icons";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineHome, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { RiContactsLine, RiMailSendLine } from "react-icons/ri";

type linkProps = { id: number; to: string; icon: IconType; label: string };

type navLinksProps = linkProps[];
export const navLinks: navLinksProps = [
  { id: 5, to: "/home", icon: HiOutlineHome, label: "Home" },
  { id: 4, to: "/about", icon: RiContactsLine, label: "About" },
  { id: 3, to: "/skills", icon: HiOutlineSquare3Stack3D, label: "Skills" },
  { id: 2, to: "/projects", icon: GrAppsRounded, label: "Projects" },
  { id: 1, to: "/contact", icon: RiMailSendLine, label: "Contact" },
];

// <FaRegCircleCheck />

// <IoMdCheckmarkCircleOutline />
