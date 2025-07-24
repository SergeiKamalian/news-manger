import { memo, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const ChangeLang = memo(() => {
  const { i18n, t } = useTranslation();
  const isSelected = i18n.language === "ru";
  const handleToggle = () => {
    const newLang = isSelected ? "en" : "ru";
    i18n.changeLanguage(newLang);
    const restPath = window.location.pathname.split("/").slice(2).join("/");
    const newPath = `/${newLang}${restPath ? "/" + restPath : ""}${
      window.location.search
    }`;
    window.history.replaceState({}, "", newPath);
  };

  useEffect(() => {
    if (i18n.language === "ru") {
      i18n.changeLanguage("ru");
    }
  }, [i18n, i18n.language]);

  return (
    <div className="flex flex-row items-center gap-2">
      <p
        className="text-center transition-all duration-300 text-[14px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans relative z-20"
        style={{ opacity: !isSelected ? 1 : 0.6 }}
      >
        <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent">
          {t("EN")}
        </span>
      </p>
      <motion.div
        onClick={handleToggle}
        className="w-[60px] flex flex-row transition-all duration-300 cursor-pointer relative z-10 items-center h-9 p-1 justify-between "
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.02)",
          borderRadius: 9999,
          boxShadow:
            "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          willChange: "transform, opacity",
          userSelect: "none",
        }}
      >
        <motion.div
          className="w-7 min-w-7 flex flex-row transition-all duration-300 gap-4 cursor-pointer items-center h-7 absolute"
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "999px",
            boxShadow:
              "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            left: isSelected ? 28 : 4,
            willChange: "transform, opacity",
          }}
        >
          <img
            src="/ru.svg"
            alt="Russian"
            className="w-7 z-10 absolute transition-all duration-300"
            style={{ opacity: isSelected ? 1 : 0 }}
          />
          <img
            src="/us.svg"
            alt="English"
            className="w-7 z-10 absolute transition-all duration-300"
            style={{ opacity: isSelected ? 0 : 1 }}
          />
        </motion.div>
      </motion.div>
      <p
        className="text-center transition-all duration-300 text-[14px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans relative z-20"
        style={{ opacity: isSelected ? 1 : 0.6 }}
      >
        <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent">
          {t("RU")}
        </span>
      </p>
    </div>
  );
});
