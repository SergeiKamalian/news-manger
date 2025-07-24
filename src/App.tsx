import {
  Background,
  Education,
  Experience,
  Header,
  Main,
  Skills,
  Works,
  Languages,
  Contact,
} from "./ui";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const pathLang = window.location.pathname.split("/")[1];
    if (pathLang === "en" || pathLang === "ru") {
      if (i18n.language !== pathLang) {
        i18n.changeLanguage(pathLang);
      }
    } else {
      // если язык не указан в url, редиректим на /en
      window.history.replaceState({}, "", `/en${window.location.search}`);
      i18n.changeLanguage("en");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const currentLang = i18n.language;
    const pathLang = window.location.pathname.split("/")[1];
    if (
      currentLang !== pathLang &&
      (currentLang === "en" || currentLang === "ru")
    ) {
      window.history.replaceState(
        {},
        "",
        `/${currentLang}${window.location.search}`
      );
    }
  }, [i18n.language]);

  useEffect(() => {
    if (i18n.language === "ru") {
      document.body.classList.add("font-ru");
    } else {
      document.body.classList.remove("font-ru");
    }
  }, [i18n.language]);

  return (
    <div className="w-[100svw] h-[100svh] bg-black">
      <Background />

      <main className="h-[200svh] relative z-10">
        <Header />
        <Main />
        <Works />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}

export default App;
