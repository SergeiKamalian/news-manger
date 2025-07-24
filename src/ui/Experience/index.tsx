import { memo } from "react";
import { ExperienceItem } from "./ExperienceItem";
import { useTranslation } from "react-i18next";

const tcm = {
  id: 0,
  logo: "/tcm-logo.png",
  name: "Telcell Market",
  exp: "tcm_exp",
  list_en: [
    "Developed three different platforms for the first Armenian marketplace (Seller, Buyer, Admin)",
    "Created an npm package, where we collected ui kit and functions that were used in three project platforms, used Atomic Design Pattern architecture",
    "The code was fully documented, Storybook was used for ui components, JSDoc for functionality. Wrote tests using Jest and Cypress to test the functionality",
    "Implemented support for light and dark themes using styled-components to improve visual perception. Added multilingualism with i18next so that users can choose the appropriate interface language.",
    "Successfully integrated various stylistic and functional elements, such as Yandex Maps, Firebase. They were used in different parts of the project, with different individual capabilities",
    "Developed complex animated landing pages with parallax effects using Framer motion, styled-components",
    "The buyer's platform has undergone a full SEO optimization using Next.js SSR rendering. Improved project performance by 80-90 percent",
    "Configured Prettier and ESLint for consistent code style and error prevention. Participatory in conducting regular code reviews",
  ],
  list_ru: [
    "Разработал три разные платформы для первого армянского маркетплейса (продавец, покупатель, админ)",
    "Создал npm-пакет, в котором собрал UI kit и функции, используемые во всех трёх платформах проекта, применил архитектуру Atomic Design Pattern",
    "Код был полностью документирован, для UI-компонентов использовался Storybook, для функционала — JSDoc. Писал тесты с помощью Jest и Cypress для проверки функционала",
    "Реализовал поддержку светлой и тёмной тем с помощью styled-components для улучшения визуального восприятия. Добавил мультиязычность через i18next, чтобы пользователи могли выбирать удобный язык интерфейса",
    "Успешно интегрировал различные стилистические и функциональные элементы, такие как Яндекс.Карты и Firebase. Они использовались в разных частях проекта с разными возможностями",
    "Разработал сложные анимированные лендинги с параллакс-эффектами, используя Framer Motion и styled-components",
    "Платформа для покупателей прошла полную SEO-оптимизацию с использованием SSR рендеринга Next.js. Производительность проекта улучшена на 80-90%",
    "Настроил Prettier и ESLint для единообразия кода и предотвращения ошибок. Участвовал в регулярных код-ревью",
  ],
  technologies:
    "Next.js, React, Typescript, Redux, Redux Toolkit, RTK query, Styled-components, SCSS/SASS, etc.",
};
const dinely = {
  id: 1,
  logo: "/dinely-logo.svg",
  name: "Dinely",
  exp: "dinely_exp",
  list_en: [
    "Built a QR-code ordering system for restaurants, cafes — no apps, no waiters, just scan and order.",
    "Developed admin & seller dashboards with smart menu and order management.",
    "Integrated OpenAI to automate menu creation, including product copy and descriptions.",
    "Designed a high-converting landing page to attract restaurants.",
    "Worked closely with backend and design to deliver fast, responsive UI.",
  ],
  list_ru: [
    "Разработал систему заказов по QR-коду для ресторанов и кафе — без приложений и официантов, просто сканируй и заказывай.",
    "Создал админские и продавцовские панели с умным управлением меню и заказами.",
    "Интегрировал OpenAI для автоматизации создания меню, включая описания продуктов и тексты.",
    "Спроектировал лендинг с высокой конверсией для привлечения ресторанов.",
    "Тесно взаимодействовал с бэкендом и дизайнерами для создания быстрого и адаптивного интерфейса.",
  ],
  technologies:
    "React, Typescript, RTK query, Tailwind CSS, Framer Motion, Storybook, i18next, FSD, Webpack, etc.",
};
const rusarm = {
  id: 2,
  logo: "/rusarm-logo.png",
  name: "RA Services",
  exp: "rusarm_exp",
  list_en: [
    "A logistic project was developed without using a direct backend side-to implement the backend side in the front, Firebase was used: Firestore, Realtime Database, CloudFront, Hosting.",
    "An authorization system on ordering tickets in the internet with the use of Telegram API is created.",
    "Created a system of sending emails about flight news, using react-email and Firebase API.",
  ],
  list_ru: [
    "Разработан логистический проект без прямой серверной части — для реализации backend-функционала использовался фронтенд с Firebase: Firestore, Realtime Database, CloudFront, Hosting.",
    "Создана система авторизации при заказе билетов в интернете с использованием Telegram API.",
    "Разработана система отправки писем с новостями о рейсах с использованием react-email и Firebase API.",
  ],
  technologies:
    "React, Typescript, Redux, Firebase, Styled-components, Telegram API, etc.",
};

export type ExperienceItemType = typeof tcm;

const experienceItems = [dinely, tcm, rusarm];

export const Experience = memo(() => {
  const { t } = useTranslation();
  return (
    <div className="w-full mt-[50px] lg:mt-[150px] max-w-[1140px] px-[20px] m-auto flex flex-col gap-6">
      <p className="text-center text-[40px] lg:text-[50px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
        <span className="bg-gradient-to-b from-[rgba(175,189,248,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
          {t("experience")}
        </span>
      </p>
      {experienceItems.map((exp) => (
        <ExperienceItem key={exp.id} item={exp} />
      ))}
    </div>
  );
});
