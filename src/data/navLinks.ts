import { IconType } from "react-icons";

import {
  HiOutlineEnvelope,
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlineSquare3Stack3D,
  HiOutlineUser,
} from "react-icons/hi2";

type linkProps = { id: number; to: string; icon: IconType; label: string };

type navLinksProps = linkProps[];
export const navLinks: navLinksProps = [
  { id: 5, to: "/home", icon: HiOutlineHome, label: "Home" },
  { id: 4, to: "/about", icon: HiOutlineUser, label: "About" },
  { id: 3, to: "/skills", icon: HiOutlineSquare3Stack3D, label: "Skills" },
  { id: 2, to: "/projects", icon: HiOutlineFolderOpen, label: "Projects" },
  { id: 1, to: "/contact", icon: HiOutlineEnvelope, label: "Contact" },
];
