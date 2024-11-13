import type { Language } from "@/models/language";
import type { Resume } from "@/models/resume";

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
};

export const resume: Record<Language, Resume> = { ru, en };
