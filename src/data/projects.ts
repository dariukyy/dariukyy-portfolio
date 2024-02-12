import { MdRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

import FitnessImg from "/images/fitness-app.jpeg";
import NetflixImg from "/images/netflix-copy.jpeg";
import NatoursImg from "/images/natours-app.jpeg";
import TheWildOasisImg from "/images/the-wild-oasis-app.jpeg";
import FastReactPizzaImg from "/images/fast-react-pizza-app.jpeg";
import WorldWiseImg from "/images/world-wise-app.jpeg";

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
    id: 2,
    title: "Fast React Pizza",
    alt: "Fast React Pizza App Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
    tags: ["React", "Redux", "React Router", "TailwindCSS"],
    image: FastReactPizzaImg,
    livePreview: "https://dariukyy-fast-react-pizza-by.netlify.app",
    codePreview: "https://github.com/dariukyy/fast-react-pizza-",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 3,
    title: "Fitness App",
    alt: "Fitness App Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
    tags: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
    image: FitnessImg,
    livePreview: "https://dariukyy-fitness-app.vercel.app/",
    codePreview: "https://github.com/dariukyy/fitness-practical-app",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 4,
    title: "World Wise",
    alt: "World Wise App Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
    tags: ["React", "React Router", "Leaflet", "CSS Modules"],
    image: WorldWiseImg,
    livePreview: "https://dariukyy-world-wise-app.netlify.app",
    codePreview: "https://github.com/dariukyy/world-wise/tree/main",
    responsive: { isResponsive: false, responsiveText: "Only Desktop" },
  },
  {
    id: 5,
    title: "The Wild Oasis",
    alt: "The Wild Oasis Website ScreenShoot",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non. Onsectetur adipiscing elit.",
    tags: [
      "React",
      "Supabase",
      "React Query",
      "React Router",
      "Recharts",
      "Styled-Components",
    ],
    image: TheWildOasisImg,
    livePreview:
      "https://dariukyy-course-project-the-wild-oasis.vercel.app/dashboard",
    codePreview: "https://github.com/dariukyy/the-wild-oasis",
    responsive: { isResponsive: false, responsiveText: "Only Desktop" },
  },
  {
    id: 6,
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
];

export const previewAndCodeIcons: IconType[] = [MdRemoveRedEye, FaCode];
