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
          "I'm a junior frontend developer with a two year of self-taught experience. I'm passionate about learning and building innovative solutions. I specialize in technologies like React, Next.js and TypeScript",
        "home-contact-me": "Contact Me",
        "about-about-me": "About Me",
        "about-personal-bio": "Personal Bio",
        "about-about-me-description":
          "Hello! My name is Darius, I am a self-taught frontend developer. I am committed to continuous learning and growth. Moving on from my previous job, I decided to focus all my energy on programming to deepen my understanding of the field and further develop my technical skills. I believe that continuous improvement is the key to success, so I invest not only time but also passion and effort into my self-development.",
        "about-personal-bio-description":
          "I am a 26 years old energetic and happy father of a girl. I live in Vilnius. From 2018 until autumn 2023, I served in the Lithuanian army in a mechanized infantry battalion. During these years, I not only gained a strong character and developed leadership skills but also realized that my calling lies in another field - programming. So, while still serving as a soldier, in the summer of 2022, I began my journey as a frontend developer.",
        "contact-form-header": "Let's Collaborate!",
        "contact-name-input-placeholder": "Name",
        "contact-email-input-placeholder": "Email",
        "contact-message-input-placeholder": "Message",
        "contact-send-button": "Send Message",
        projects: {
          0: {
            title: "AI Chat Agent",
            description:
              "A cutting-edge customisabe AI Chat Agent that helps you manage your customer conversations. This project delivers a seamless user experience with dynamic chat features and advanced AI capabilities. Explore the future of customer service with this innovative chat agent.",
            responsiveText: "Responsive",
          },
          1: {
            title: "The Wild Oasis / Customers",
            description:
              "This full stack application allows users to search for and book cabins. Using Supabase for the API and database, and Google for authentication, it ensures secure and efficient operations. Designed for customers and it synchronizes data with the Wild Oasis app for employers, ensuring smooth and up-to-date information sharing.",
            responsiveText: "Only Desktop",
          },
          2: {
            title: "Employee table",
            description:
              "An employee management system that tracks the login status of employees and the validity of their credentials. This system ensures that all employees receive the necessary certifications with real-time information, improving overall workforce management and compliance.",
            responsiveText: "Only Desktop",
          },
          3: {
            title: "Dariukyy Weather App",
            description:
              "Revolutionize your weather experience. Powered by Next.js, TypeScript, TailwindCSS, and cutting-edge technologies like Tremor and StepZen, it delivers hyper-personalized forecasts. Using GraphQL and Apollo Client for lightning-fast performance, alongside OpenAI API for advanced AI insights.",
            responsiveText: "Responsive",
          },
          4: {
            title: "Netflix Clone",
            description:
              "A Netflix clone, enhanced with real-world movie data API. Utilizing Firebase for authentication and backend operations, this project delivers an immersive user experience, blending seamless design with dynamic content sourced from real movie databases.",
            responsiveText: "Responsive",
          },
          5: {
            title: "Dariukyy Fast Pizza",
            description:
              "A dynamic pizza ordering app using live pizza data from the API. Explore a seamless user interface, showcasing expertise in frontend development and UI design. Modern web technologies and real-time data integration.",
            responsiveText: "Responsive",
          },
          6: {
            title: "Fitness App",
            description:
              "A modern fitness app with React, TypeScript, Tailwind CSS, and Framer Motion for captivating animations. Dive into an immersive user experience with fluid transitions and dynamic UI elements, showcasing proficiency in frontend development and design.",
            responsiveText: "Responsive",
          },
          7: {
            title: "World Wise",
            description:
              "A real-world project integrating city data API into a Leaflet map library, enabling users to track their travels by registering visited cities. Experience interactive map interface, demonstrating proficiency in frontend development and API integration. Explore the real-world data and user engagement in this dynamic travel companion.",
            responsiveText: "Only Desktop",
          },
          8: {
            title: "The Wild Oasis",
            description:
              "A full-stack hotel management application, leveraging Supabase for backend operations, CRUD, and authentication, seamlessly integrates frontend and backend functionalities and data-driven UI design.",
            responsiveText: "Only Desktop",
          },
          9: {
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
          "Esu jaunesnysis frontend kūrėjas, turintis dviejų metų savarankiško darbo patirties. Aistringai mokausi ir kuriu novatoriškus sprendimus. Specializuojuosi tokiose technologijose kaip React, Next.js ir TypeScript",
        "home-contact-me": "Bendradarbiaukime",
        "about-about-me": "Apie mane",
        "about-personal-bio": "Biografija",
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
          0: {
            title: "AI Chat Agentas",
            description:
              "Pažangiausias pritaikytas dirbtinio intelekto pokalbių agentas, padedantis valdyti klientų pokalbius. Šis projektas užtikrina sklandžią vartotojo patirtį su dinamiškomis pokalbių funkcijomis ir pažangiomis AI galimybėmis. Naršykite klientų aptarnavimo ateitį su šiuo naujovišku pokalbių agentu.",
            responsiveText: "Visiems įrenginiams",
          },
          1: {
            title: "The Wild Oasis / Klientai",
            description:
              "Ši full-stack aplikacija leidžia naudotojams ieškoti ir rezervuoti kabinas. Naudojant Supabase API ir duomenų bazę, ir „Google“ autentifikavimui, ji užtikrina saugias ir efektyvias operacijas. Sukurta klientams, ji sinchronizuoja duomenis su „Wild Oasis“ aplikacija darbdaviams, užtikrinant sklandų ir naujausią informacijos dalijimąsi.",
            responsiveText: "Tik kompiuteriams",
          },
          2: {
            title: "Darbuotojų lentelė",
            description:
              "Darbuotojų valdymo sistemą, kuri seka darbuotojų prisijungimo būseną ir jų pažymų galiojimą. Ši sistema užtikrina, kad visi darbuotojai gautų reikiamas pažymas realiuoju laiku pateikta informacija, pagerindama bendrą darbo jėgos valdymą ir atitikimą.",
            responsiveText: "Tik kompiuteriams",
          },
          3: {
            title: "Dariukyy Orų Svetainė",
            description:
              "Pakeiskite orų patirtį. Naudojant Next.js, TypeScript, TailwindCSS ir pažangiausias technologijas, pvz., „Tremor“ ir „StepZen“, jis teikia itin suasmenintas prognozes. Naudojant GraphQL ir Apollo Client žaibiškam veikimui, kartu su OpenAI API pažangioms AI įžvalgoms.",
            responsiveText: "Visiems įrenginiams",
          },
          4: {
            title: "Netflix Klonas",
            description:
              "Netflix klonas, papildytas realaus pasaulio filmų duomenų API. Naudojant Firebase autentifikavimui ir galinėms operacijoms, šis projektas užtikrina įtraukiančią naudotojo patirtį, sujungdamas vientisą dizainą su dinamišku turiniu, gaunamu iš tikrų filmų duomenų bazių.",
            responsiveText: "Visiems įrenginiams",
          },
          5: {
            title: "Dariukyy Fast Pizza",
            description:
              "Dinaminė picų užsakymo programa, kurioje naudojami tiesioginiai picų duomenys iš API. Išnagrinėkite vientisą naudotojo sąsają, demonstruojančia žinias apie priekinės dalies kūrimą ir vartotojo sąsajos dizainą. Šiuolaikinės žiniatinklio technologijos ir realaus laiko duomenų integracija.",
            responsiveText: "Visiems įrenginiams",
          },
          6: {
            title: "Fitneso programa",
            description:
              "Šiuolaikinė fitneso programėlė su React, TypeScript, Tailwind CSS ir Framer Motion, skirta įspūdingoms animacijoms. Pasinerkite į įtraukiančią naudotojo patirtį su sklandžiais perėjimais ir dinamiškais vartotojo sąsajos elementais, pademonstruodami priekinės dalies kūrimo ir dizaino išmanymą.",
            responsiveText: "Visiems įrenginiams",
          },
          7: {
            title: "World Wise",
            description:
              "Realaus pasaulio projektas, kuriame į Leaflet žemėlapių biblioteką integruojama miestų duomenų API, kad naudotojai galėtų stebėti savo keliones registruodami aplankytus miestus. Patirkite interaktyvią žemėlapio sąsają, demonstruojancia priekinės dalies kūrimą ir API integracijos įgūdžius. Išnagrinėkite realaus pasaulio duomenis ir naudotojų įsitraukimą į šį dinamišką kelionių palydovą.",
            responsiveText: "Tik kompiuteriams",
          },
          8: {
            title: "The Wild Oasis",
            description:
              "Visapusiška viešbučių valdymo programa, naudojanti Supabase galinėms operacijoms, CRUD ir autentifikavimui, sklandžiai integruoja priekinės ir galinės dalies funkcijas ir duomenimis pagrįstą vartotojo sąsajos dizainą.",
            responsiveText: "Tik kompiuteriams",
          },
          9: {
            title: "Natours",
            description:
              "Naudojant Sass sukūriau akį traukiančią svetainę, turinčią pilną įspūdingų animacijų. Pasinerkite į vizualiai stulbinančią patirtį, kai animacijos atgaivina turinį, pademonstruodamos kūrybiškumą ir žinias apie priekinės dalies kūrimą. Ištirkite Sass galią, kad supaprastintumėte stilių ir sukurtumėte dinamišką žiniatinklio patirtį",
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
