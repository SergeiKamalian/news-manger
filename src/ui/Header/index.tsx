import { memo } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ChangeLang } from "./ChangeLang";
import { useTranslation } from "react-i18next";

export const Header = memo(() => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const translateX = useMotionValue(-50);

  const combinedTransform = useTransform(
    [translateX, scale],
    ([x, s]) => `translateX(${x}%) scale(${s})`
  );
  const { t } = useTranslation();

  return (
    <motion.div
      style={{
        opacity,
        transform: combinedTransform,
      }}
      className="fixed top-[30px] left-1/2 w-full max-w-[1140px] px-[20px] flex items-center md:top-[60px] justify-between"
    >
      <div className="flex flex-col opacity-90 justify-start items-start">
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(213, 216, 234) 0%, rgba(213, 216, 234, 0.72) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="font-semibold text-[20px] tracking-[-0.3px] text-left"
        >
          Sergey Kamalyan
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[14px] font-regular"
          style={{
            color: "rgba(213, 216, 234, 0.8)",
            fontWeight: 200,
          }}
        >
          Front-end {t("developer")}
        </motion.h2>
      </div>
      <motion.div
        className="flex flex-row gap-5 text-white"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ChangeLang />
      </motion.div>
    </motion.div>
  );
});
