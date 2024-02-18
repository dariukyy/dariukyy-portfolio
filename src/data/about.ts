export type AboutItem = {
  id: number;
  option: string;
  description: string;
};

export type AboutDataProps = AboutItem[];

export const aboutData: AboutDataProps = [
  {
    id: 1,
    option: "about-about-me",
    description: "about-about-me-description",
  },
  {
    id: 2,
    option: "about-personal-bio",
    description: "about-personal-bio-description",
  },
];
