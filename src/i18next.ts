import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        About: "About",
        Skills: "Skills",
        Projects: "Projects",
        Contact: "Contact",
        "toast-success-message": "Message sent successfully, ",
        "toast-error-message": "Message not sent. Please try again later!",
        "input-name": "Name",
        "input-email": "Email",
        "input-message": "Message",
        "input-field-required": "This field is required!",
        "input-field-email": "Please write correct email!",
        "input-field-max-length": "Max length is 100 characters!",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-my-name-is": "My name is,",
        "scroll-down": "Scroll Down",

        "home-description":
          "I'm a junior frontend developer with a year and a half of self-taught experience. I'm passion for learning and building innovative solutions. I specialize with technologies like React, Redux, TypeScript, styled-components and TailwindCSS.",
        "home-contact-me": "Contact Me",
        "about-about-me": "About Me",
        "about-personal-bio": "Personal Bio",
        "about-about-me-description":
          "Hello! My name is Darius, I am a self-taught frontend developer. I am committed to continuous learning and growth. Moving on from my previous job, I decided to focus all my energy on programming to deepen my understanding of the field and further develop my technical skills. I believe that continuous improvement is the key to success, so I invest not only time but also passion and effort into my self-development.",
        "about-personal-bio-description":
          "I am a 26 years old energetic and happy father of a girl. I live in Vilnius. From 2018 until autumn 2023, I served in the Lithuanian army in a mechanized infantry battalion. During these years, I not only gained a strong character and developed leadership skills but also realized that my calling lies in another field - programming. So, while still serving as a soldier, in the summer of 2022, I began my journey as a front-end developer.",
        "contact-form-header": "Let's Collaborate!",
        "contact-name-input-placeholder": "Name",
        "contact-email-input-placeholder": "Email",
        "contact-message-input-placeholder": "Message",
        "contact-send-button": "Send Message",
        projects: {
          1: {
            title: "Netflix Clone",
            description:
              "A Netflix clone, enhanced with real-world movie data API. Utilizing Firebase for authentication and backend operations, this project delivers an immersive user experience, blending seamless design with dynamic content sourced from real movie databases.",
            responsiveText: "Responsive",
          },
          2: {
            title: "Dariukyy Fast Pizza",
            description:
              "A dynamic pizza ordering app using live pizza data from the API. Explore a seamless user interface, showcasing expertise in frontend development and UI design. Modern web technologies and real-time data integration.",
            responsiveText: "Responsive",
          },
          3: {
            title: "Fitness App",
            description:
              "A modern fitness app with React, TypeScript, Tailwind CSS, and Framer Motion for captivating animations. Dive into an immersive user experience with fluid transitions and dynamic UI elements, showcasing proficiency in frontend development and design.",
            responsiveText: "Responsive",
          },
          4: {
            title: "World Wise",
            description:
              "A real-world project integrating city data API into a Leaflet map library, enabling users to track their travels by registering visited cities. Experience interactive map interface, demonstrating proficiency in frontend development and API integration. Explore the real-world data and user engagement in this dynamic travel companion.",
            responsiveText: "Only Desktop",
          },
          5: {
            title: "The Wild Oasis",
            description:
              "A full-stack hotel management application, leveraging Supabase for backend operations, CRUD, and authentication, seamlessly integrates frontend and backend functionalities and data-driven UI design.",
            responsiveText: "Only Desktop",
          },
          6: {
            title: "Natours",
            description:
              "Designed an eye-catching website filled with captivating animations using Sass. Immerse yourself in a visually stunning experience as animations bring content to life, showcasing creativity and expertise in frontend development. Explore the power of Sass to streamline styling and create dynamic web experiences",
            responsiveText: "Responsive",
          },
        },
      },
    },
    lt: {
      translation: {
        About: "Apie mane",
        Skills: "Įgūdžiai",
        Projects: "Projektai",
        Contact: "Kontaktai",
        "toast-success-message": "Žinutė sėkmingai išsiųsta, ",
        "toast-error-message":
          "Žinutės išsiųsti nepavyko. Prašome bandyti vėliau!",
        "input-name": "Vardas",
        "input-email": "El. paštas",
        "input-message": "Žinutė",
        "input-field-required": "Šis laukas yra privalomas!",
        "input-field-email": "Prašome įvesti teisingą el. paštą!",
        "input-field-max-length": "Maksimalus simbolių skaičius yra 100!",
        "nav-home": "Pradžia",
        "nav-about": "Apie Mane",
        "nav-skills": "Įgūdžiai",
        "nav-projects": "Projektai",
        "nav-contact": "Kontaktai",
        "scroll-down": "Slinkite Žemyn",

        "home-my-name-is": "Mano vardas yra,",
        "home-description":
          "Esu jaunesnysis frontend kūrėjas, turintis pusantrų metų savarankiško darbo patirties. Aistringai mokausi ir kuriu novatoriškus sprendimus. Specializuojuosi tokiose technologijose kaip React, Redux, TypeScript, styled-components ir TailwindCSS.",
        "home-contact-me": "Bendradarbiaukime",
        "about-about-me": "Apie mane",
        "about-personal-bio": "Asmeninė biografija",
        "about-about-me-description":
          "Sveiki! Mano vardas Darius, esu savamokslis frontend kūrėjas. Esu įsipareigojęs nuolat mokytis ir tobulėti. Perėjęs iš ankstesnio darbo, nusprendžiau visą savo energiją sutelkti į programavimą, kad pagilinčiau šios srities supratimą ir toliau tobulinčiau savo techninius įgūdžius. Tikiu, kad nuolatinis tobulėjimas yra raktas į sėkmę, todėl į saviugdą investuoju ne tik laiką, bet ir aistrą bei pastangas.",
        "about-personal-bio-description":
          "Esu 26 metų energingas ir laimingas mergaitės tėvas. Gyvenu Vilniuje. Nuo 2018 m. iki 2023 m. rudens tarnavau Lietuvos kariuomenėje mechanizuotajame pėstininkų batalione. Per šiuos metus ne tik įgijau tvirtą charakterį ir išsiugdžiau lyderystės įgūdžius, bet ir supratau, kad mano pašaukimas slypi kitoje srityje - programavime. Taigi, dar tarnaudamas kaip karys, 2022 m. vasarą pradėjau savo, kaip front end programuotojo, kelią.",
        "contact-form-header": "Bendradarbiaukime!",
        "contact-name-input-placeholder": "Vardas",
        "contact-email-input-placeholder": "El. paštas",
        "contact-message-input-placeholder": "Žinutė",
        "contact-send-button": "Siųsti žinutę",
        projects: {
          1: {
            title: "Netflix Klonas",
            description:
              "Netflix klonas, papildytas realaus pasaulio filmų duomenų API. Naudojant Firebase autentifikavimui ir galinėms operacijoms, šis projektas užtikrina įtraukiančią naudotojo patirtį, sujungdamas vientisą dizainą su dinamišku turiniu, gaunamu iš tikrų filmų duomenų bazių.",
            responsiveText: "Visiems įrenginiams",
          },
          2: {
            title: "Dariukyy Fast Pizza",
            description:
              "Dinaminė picų užsakymo programa, kurioje naudojami tiesioginiai picų duomenys iš API. Išnagrinėkite vientisą naudotojo sąsają, demonstruojančia žinias apie priekinės dalies kūrimą ir vartotojo sąsajos dizainą. Šiuolaikinės žiniatinklio technologijos ir realaus laiko duomenų integracija.",
            responsiveText: "Visiems įrenginiams",
          },
          3: {
            title: "Fitneso programa",
            description:
              "Šiuolaikinė fitneso programėlė su React, TypeScript, Tailwind CSS ir Framer Motion, skirta įspūdingoms animacijoms. Pasinerkite į įtraukiančią naudotojo patirtį su sklandžiais perėjimais ir dinamiškais vartotojo sąsajos elementais, pademonstruodami priekinės dalies kūrimo ir dizaino išmanymą.",
            responsiveText: "Visiems įrenginiams",
          },
          4: {
            title: "World Wise",
            description:
              "Realaus pasaulio projektas, kuriame į Leaflet žemėlapių biblioteką integruojama miestų duomenų API, kad naudotojai galėtų stebėti savo keliones registruodami aplankytus miestus. Patirkite interaktyvią žemėlapio sąsają, demonstruojancia priekinės dalies kūrimą ir API integracijos įgūdžius. Išnagrinėkite realaus pasaulio duomenis ir naudotojų įsitraukimą į šį dinamišką kelionių palydovą.",
            responsiveText: "Tik kompiuteriams",
          },
          5: {
            title: "The Wild Oasis",
            description:
              "Visapusiška viešbučių valdymo programa, naudojanti Supabase galinėms operacijoms, CRUD ir autentifikavimui, sklandžiai integruoja priekinės ir galinės dalies funkcijas ir duomenimis pagrįstą vartotojo sąsajos dizainą.",
            responsiveText: "Tik kompiuteriams",
          },
          6: {
            title: "Natours",
            description:
              "Naudojant Sass sukūriau akį traukiančią svetainę, pilną įspūdingų animacijų. Pasinerkite į vizualiai stulbinančią patirtį, kai animacijos atgaivina turinį, pademonstruodamos kūrybiškumą ir žinias apie priekinės dalies kūrimą. Ištirkite Sass galią, kad supaprastintumėte stilių ir sukurtumėte dinamišką žiniatinklio patirtį",
            responsiveText: "Visiems įrenginiams",
          },
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
