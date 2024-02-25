import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiCssmodules,
  SiFirebase,
  // SiJest,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  // SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export type SkillProp = {
  id: number;
  skill: string;
  icon: IconType;
  color?: string;
  fill?: string;
  transition?: string;
};

type SkillsProps = SkillProp[];

export const skills: SkillsProps = [
  { skill: "HTML", icon: FaHtml5, id: 1, color: "#e34c26" },
  { skill: "CSS", icon: FaCss3Alt, id: 2, color: "#264de4" },
  { skill: "JavaScript", icon: IoLogoJavascript, color: "#f0db4f", id: 3 },
  { skill: "TypeScript", icon: SiTypescript, id: 4, color: "#007acc" },
  { skill: "React", icon: FaReact, id: 5, color: "#61dafb" },
  { skill: "Redux", icon: SiRedux, id: 6, color: "#764abc" },
  { skill: "React Query", icon: SiReactquery, id: 7, color: "#ff4154" },
  { skill: "React Router", icon: SiReactrouter, id: 8, color: "#ca4245" },
  // { skill: "Jest", icon: SiJest, id: 9, color: "#99425b" },
  // {
  //   skill: "React Testing Library",
  //   icon: SiTestinglibrary,
  //   id: 10,
  //   color: "#ef4444",
  // },

  { skill: "Git", icon: FaGitAlt, id: 11, color: "#f34f29" },
  { skill: "Firebase", icon: SiFirebase, id: 12, color: "#ffca28" },
  { skill: "Supabase", icon: RiSupabaseFill, id: 13, color: "#33b382" },
  {
    skill: "Framer Motion",
    icon: TbBrandFramerMotion,
    id: 14,
    color: "#ff00f7",
  },
  { skill: "Tailwind CSS", icon: SiTailwindcss, id: 15, color: "#38b2ac" },
  {
    skill: "CSS Modules",
    icon: SiCssmodules,
    id: 16,
    fill: "var(--color-grey-800)",
    transition: "all 0.3s",
  },
  {
    skill: "Styled Components",
    icon: SiStyledcomponents,
    id: 17,
    color: "#db7093",
  },
  { skill: "Sass", icon: FaSass, id: 18, color: "#cc6699" },
];
