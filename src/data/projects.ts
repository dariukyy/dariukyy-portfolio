import FitnessImg from "../assets/images/fitness-app.jpeg";
import NetflixImg from "../assets/images/netflix-copy.jpeg";
import NatoursImg from "../assets/images/natours-app.jpeg";

export type Project = {
  id: number;
  title: string;
  alt: string;
  description: string;
  tags: string[];
  image: string;
  livePreview: string;
  codePreview: string;
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
  },
];
