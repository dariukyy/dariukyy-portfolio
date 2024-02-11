import FitnessImg from "../assets/images/fitness-app.jpeg";
import NetflixImg from "../assets/images/netflix-copy.jpeg";
import NatoursImg from "../assets/images/natours-app.jpeg";
import TheWildOasisImg from "../assets/images/the-wild-oasis-app.jpeg";
import { MdRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

type ResponsiveProps = { isResponsive: boolean; responsiveText: string };

export type Project = {
  id: number;
  title: string;
  alt: string;
  description: string;
  tags: string[];
  image: string;
  livePreview: string;
  codePreview: string;
  responsive: ResponsiveProps;
};

type PronectsDataProps = Project[];

export const projectsData: PronectsDataProps = [
  {
    id: 1,
    title: "Fitness App",
    alt: "Fitness App Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
    tags: ["React", "Typescript", "Framer", "TailwindCSS"],
    image: FitnessImg,
    livePreview: "https://dariukyy-fitness-app.vercel.app/",
    codePreview: "https://github.com/dariukyy/fitness-practical-app",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 2,
    title: "Netflix Copy",
    alt: "Netflix Copy Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
    tags: ["React", "Axios", "Firebase", "TailwindCSS"],
    image: NetflixImg,
    livePreview: "https://dariukyy-netflix-copy-react-tailwind.netlify.app/",
    codePreview: "https://github.com/dariukyy/netflix-copy",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 3,
    title: "Natours",
    alt: "Natours Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non. Onsectetur adipiscing elit.",
    tags: ["HTML", "Sass"],
    image: NatoursImg,
    livePreview: "https://dariukyy-natours-sass.netlify.app/",
    codePreview: "",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 4,
    title: "The Wild Oasis",
    alt: "The Wild Oasis Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non. Onsectetur adipiscing elit.",
    tags: ["React", "Supabase", "React Query", "Recharts", "Styled-Components"],
    image: TheWildOasisImg,
    livePreview:
      "https://dariukyy-course-project-the-wild-oasis.vercel.app/dashboard",
    codePreview: "https://github.com/dariukyy/the-wild-oasis",
    responsive: { isResponsive: false, responsiveText: "Only Desktop" },
  },
];

export const previewAndCodeIcons: IconType[] = [MdRemoveRedEye, FaCode];
