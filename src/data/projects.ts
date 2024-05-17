import { MdRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

import FitnessImg from "/images/fitness-app.jpeg";
import NetflixImg from "/images/netflix-copy.jpeg";
import NatoursImg from "/images/natours-app.jpeg";
import TheWildOasisImg from "/images/the-wild-oasis-app.jpeg";
import FastReactPizzaImg from "/images/fast-react-pizza-app.jpeg";
import WorldWiseImg from "/images/world-wise-app.jpeg";
import WeatherImg from "/images/weather-app.jpeg";
import reactTableProjectImage from '/images/react-table.jpeg'


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
    id: 8,
    title: "Employee table",
    alt: "Employee table Website ScreenShoot",
    description:
    "An employee management system that tracks employee login status and the validity of their certifications. This system ensures that all employees are up-to-date with their required credentials and provides real-time updates on their activity, enhancing overall workforce management and compliance.",
    tags: [
      "React",
      "TypeScript",
      "styled-components",
      "Framer Motion",
    ],
    image: reactTableProjectImage,
    livePreview: "https://dariukyy-homework.vercel.app",
    codePreview: "https://github.com/dariukyy/home-assignment",
    responsive: { isResponsive: false, responsiveText: "Only Desktop" },
  },
  {
    id: 1,
    title: "Dariukyy Weather App",
    alt: "Weather App Website ScreenShoot",
    description:
      "Revolutionize your weather experience with our personal weather app. Powered by Next.js, TypeScript, TailwindCSS, and cutting-edge technologies like Tremor and StepZen, it delivers hyper-personalized forecasts. Using GraphQL and Apollo Client for lightning-fast performance, alongside OpenAI API for advanced AI insights.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Tremor",
      "StepZen",
      "GraphQL",
      "Apollo Client",
      "OpenAI API",
    ],
    image: WeatherImg,
    livePreview: "https://dariukyy-weather-app.vercel.app/",
    codePreview: "https://github.com/dariukyy/weather-app",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 2,
    title: "Netflix Clone",
    alt: "Netflix Copy Website ScreenShoot",
    description:
      "Enhanced with real-world movie data API. Utilizing Firebase for authentication and backend operations, this project delivers an immersive user experience, blending seamless design with dynamic content sourced from real movie databases.",
    tags: ["React", "Axios", "Firebase", "TailwindCSS"],
    image: NetflixImg,
    livePreview: "https://dariukyy-netflix-copy-react-tailwind.netlify.app/",
    codePreview: "https://github.com/dariukyy/netflix-copy",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 3,
    title: "Dariukyy Fast Pizza",
    alt: "Fast Pizza App Website ScreenShoot",
    description:
      "A dynamic pizza ordering app using live pizza data from the API. Explore a seamless user interface, showcasing expertise in frontend development and UI design. Modern web technologies and real-time data integration.",
    tags: ["React", "Redux", "React Router", "TailwindCSS"],
    image: FastReactPizzaImg,
    livePreview: "https://dariukyy-fast-pizza.vercel.app/",
    codePreview: "https://github.com/dariukyy/dariukyy-fast-pizza",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 4,
    title: "Fitness App",
    alt: "Fitness App Website ScreenShoot",
    description:
      "A modern fitness app with React, TypeScript, Tailwind CSS, and Framer Motion for captivating animations. Dive into an immersive user experience with fluid transitions and dynamic UI elements, showcasing proficiency in frontend development and design.",
    tags: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
    image: FitnessImg,
    livePreview: "https://dariukyy-fitness-app.vercel.app/",
    codePreview: "https://github.com/dariukyy/fitness-practical-app",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
  {
    id: 5,
    title: "World Wise",
    alt: "World Wise App Website ScreenShoot",
    description:
      "A real-world project integrating city data API into a Leaflet map library, enabling users to track their travels by registering visited cities. Experience interactive map interface, demonstrating proficiency in frontend development and API integration. Explore the real-world data and user engagement in this dynamic travel companion.",
    tags: ["React", "React Router", "Leaflet", "CSS Modules"],
    image: WorldWiseImg,
    livePreview: "https://dariukyy-world-wise-app.netlify.app",
    codePreview: "https://github.com/dariukyy/world-wise/tree/main",
    responsive: { isResponsive: false, responsiveText: "Only Desktop" },
  },
  {
    id: 6,
    title: "The Wild Oasis",
    alt: "The Wild Oasis Website ScreenShoot",
    description:
      "A full-stack hotel management application, leveraging Supabase for backend operations, CRUD, and authentication, seamlessly integrates frontend and backend functionalities and data-driven UI design.",
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
      "https://dariukyy-course-project-the-wild-oasis.vercel.app/login",
    codePreview: "https://github.com/dariukyy/the-wild-oasis",
    responsive: { isResponsive: false, responsiveText: "Only Desktop" },
  },
  {
    id: 7,
    title: "Natours",
    alt: "Natours Website ScreenShoot",
    description:
      "Designed an eye-catching website filled with captivating animations using Sass. Immerse yourself in a visually stunning experience as animations bring content to life, showcasing creativity and expertise in frontend development. Explore the power of Sass to streamline styling and create dynamic web experiences",
    tags: ["HTML", "Sass"],
    image: NatoursImg,
    livePreview: "https://natours-sass-gamma.vercel.app/",
    codePreview: "https://github.com/dariukyy/natours-sass",
    responsive: { isResponsive: true, responsiveText: "Responsive" },
  },
];

export const previewAndCodeIcons: IconType[] = [MdRemoveRedEye, FaCode];
