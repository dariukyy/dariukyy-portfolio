export type AboutItem = {
  id: number;
  option: "About me" | "Personal Bio" | "Option3";
  description: string;
};

export type AboutDataProps = AboutItem[];

export const aboutData: AboutDataProps = [
  {
    id: 1,
    option: "About me",
    description: `Hello! My name is Darius, I am a self-taught frontend developer. I am committed to continuous learning and growth. Moving on from my previous job, I decided to focus all my energy on programming to deepen my understanding of the field and further develop my technical skills.  I believe that continuous improvement is the key to success, so I invest not only time but also passion and effort into my self-development.`,
  },
  {
    id: 2,
    option: "Personal Bio",
    description:
      "I am a 26 years old energetic and happy father of a girl. I live in Vilnius. From 2018 until autumn 2023, I served in the Lithuanian army in a mechanized infantry battalion. During these years, I not only gained a strong character and developed leadership skills but also realized that my calling lies in another field - programming. So, while still serving as a soldier, in the summer of 2022, I began my journey as a front-end developer.",
  },
];
