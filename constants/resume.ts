import type { Language } from "@/models/language";
import type { Resume } from "@/models/resume";

const skills = {
  frontend: [
    "HTML, CSS, JavaScript ES6+",
    "TypeScript 4+",
    "CSS, SCSS, Tailwind",
    "Responsive Design",
    "Bootstrap, Mantine, Chakra UI",
    "shadcn/ui, Framer Motion",
    "Styled Components, Emotion",
    "React, Next.js [Pages/App Router]",
    "Vue 2/3, Vuex, Nuxt.js",
    "Angular, RxJS, NgRX",
  ],
  moreFrontend: [
    "Redux / Toolkit, Mobx, Zustand",
    "React Hook Form, Formik",
    "GraphQL, Apollo Client",
    "Canvas API, Intersection Observer API",
    "Three JS, React Three Fiber",
    "Notifications API, Service Workers",
    "Pagination, Infinite Scroll",
    "Lazy Loading, Virtualization",
    "Jest, React Testing Library",
  ],
  mobile: [
    "Kotlin, Java",
    "Android SDK, Volley",
    "React Native",
    "React Navigation",
    "Reanimated, Gesture Handler",
  ],
  backend: [
    "NodeJS, ExpressJS",
    "JWT Tokens, Cookies",
    "MongoDB, PostgreSQL",
    "Authentication",
    "Web Sockets",
  ],
};

export const ru: Resume = {
  firstName: "Владимир",
  lastName: "Степанов",
  contacts: [
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "г. Якутск", type: "text" },
  ],
  about: {
    title: "О себе",
    content: [
      "Я фронтенд разработчик со стремлением к постоянному развитию и совершенствованию своих навыков, чтобы создавать качественные и удобные для пользователя продукты",
      "Мой путь в разработку начался с написания небольшой текстовой игры под Android, которая позволила мне понять, что программирование — это то, чем я хочу заниматься",
      "За более чем три года опыта работы с фронтенд фреймворками (преимущественно React, но также есть опыт с React Native, Vue и Angular) я приобрел навыки создания качественных и отзывчивых пользовательских интерфейсов. Я работал над множеством проектов, включая создание корпоративных сайтов, админ панелей и мобильных приложений",
      "Кроме того, у меня есть опыт менторства коллег, находящихся на этапе стажировки, и я всегда готов делиться своими знаниями и опытом. Я считаю, что обучение других — это отличный способ улучшить свои навыки и расширить свое понимание предметной области",
    ],
  },
  skills: {
    title: "Навыки",
    ...skills,
  },
  experience: {
    title: "Опыт",
    content: [
      {
        title: "ООО “Двигус”",
        description:
          "Отвечал за разработку системы управления подбором. В нее входили веб-приложение для работы операторов, интеграция сервиса обзвона и админ. панель",
        location: "г. Москва",
        position: "Frontend разработчик",
        tags: ["React"],
        date: "Октябрь 2023 – по н.в.",
        duration: "",
      },
      {
        title: "ООО “Квантум”",
        description:
          "Был частью команды разработки C2B2C платформы. Руководил разработкой клиенто-ориентированной части платформы, в нее входили веб-приложение на Next.js и мобильное приложение на React Native",
        location: "г. Якутск",
        position: "Frontend разработчик",
        tags: ["React", "Next.JS", "React Native"],
        date: "Июнь 2022 - Август 2023",
        duration: "1 год 1 месяц",
      },
      {
        title: "ООО “АЭБ АйТи”",
        description:
          "В составе команды разрабатывал медицинский портал на Next.JS и его админ. панель на React",
        location: "г. Якутск",
        position: "Frontend разработчик",
        tags: ["React", "Next.JS"],
        date: "Май 2021 - Май 2022",
        duration: "1 год",
      },
    ],
  },
  education: {
    title: "Образование",
    content: [
      {
        title: "Якутский колледж связи и энергетики (ЯКСЭ)",
        date: "2015 - 2018",
        specialty: "Аудиовизуальная техника",
      },
    ],
  },
};

export const en: Resume = {
  firstName: "Vladimir",
  lastName: "Stepanov",
  contacts: [
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "Russia, Yakutsk", type: "text" },
  ],
  about: {
    title: "About",
    content: [
      "I am a frontend developer with a passion for continuous growth and improving my skills to create high-quality and user-friendly products",
      "My journey into development began with writing a small text-based game for Android, which made me realize that programming is what I want to do",
      "With over three years of experience working with frontend frameworks (primarily React, but also with React Native, Vue, and Angular), I have gained skills in creating high-quality and responsive user interfaces. I have worked on a variety of projects, including corporate websites, admin panels, and mobile applications",
      "Additionally, I have experience mentoring colleagues who are at the internship stage, and I am always ready to share my knowledge and experience. I believe that teaching others is a great way to improve my own skills and expand my understanding of the subject",
    ],
  },
  skills: {
    title: "About",
    ...skills,
  },
  experience: {
    title: "Experience",
    content: [
      {
        title: "Dvigus",
        description:
          "I was responsible for developing a recruitment management system, which included a web application for operator workflows, integration with a call service, and an admin panel",
        location: "Russia, Moscow",
        position: "Frontend Developer",
        tags: ["React"],
        date: "October 2023 – present",
        duration: "",
      },
      {
        title: "Qwantum",
        description:
          "I was part of the team developing a C2B2C platform, where I led the development of the client-oriented parts, including a Next.js web application and a React Native mobile app",
        location: "Russia, Yakutsk",
        position: "Frontend Developer",
        tags: ["React", "Next.JS", "React Native"],
        date: "June 2022 - August 2023",
        duration: "1 year 1 month",
      },
      {
        title: "AEB IT",
        description:
          "As part of the team, I developed a medical portal on Next.js and its admin panel on React",
        location: "Russia, Yakutsk",
        position: "Frontend Developer",
        tags: ["React", "Next.JS"],
        date: "May 2021 - May 2022",
        duration: "1 year",
      },
    ],
  },
  education: {
    title: "Education",
    content: [
      {
        title: "Yakutsk College of Communications and Energy (YCCE)",
        date: "2015 - 2018",
        specialty: "Audio-visual technology",
      },
    ],
  },
};

export const resume: Record<Language, Resume> = { ru, en };
