import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { memo, useRef } from "react";
import { useTranslation } from "react-i18next";

export const Education = memo(() => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 10,
    damping: 20,
    mass: 0.2,
  });

  const opacity = useTransform(smoothProgress, [0, 0.1], [0.6, 1]);
  const rotateX = useTransform(smoothProgress, [0, 0.1], [0, 0]);
  const y = useTransform(smoothProgress, [0, 0.1], [0, 0]);

  const combinedTransform = useTransform(
    [rotateX, y],
    ([rx, ty]) => `rotateX(${rx}deg) translateY(${ty}px)`
  );
  const { t } = useTranslation();

  return (
    <div className="w-full mt-[50px] md:mt-[70px] max-w-[1140px] px-[20px] m-auto flex flex-col gap-6 text-white">
      <p className="text-center text-[40px] lg:text-[50px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
        <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
          {t("education")}
        </span>
      </p>
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <motion.div
          className="w-full flex flex-row gap-1 transition-all duration-300 gap-3"
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: 20,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            transform: combinedTransform,
            opacity,
            willChange: "transform, opacity",
          }}
        >
          <motion.div
            className="min-w-[90px] w-[90px] h-[90px] rounded-2xl overflow-hidden transition-all duration-500"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.08) 0px 0.482901px 1.06238px -0.5px, rgba(0, 0, 0, 0.23) 0px 4px 8.8px -1px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img src={"/ysu.svg"} alt="Ysu" className="w-full h-full" />
          </motion.div>
          <div className="flex flex-col relative z-1 justify-evenly">
            <p className="text-start text-[18px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
                {t("ysu.name")}
              </span>
            </p>
            <p className="text-start text-[18px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.73)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.52)] via-[rgba(213,216,234,0.83)] to-[rgba(223,226,245,0.87)] bg-clip-text text-transparent ">
                {t("ysu.type")}
              </span>
            </p>
            <p className="text-[16px] font-medium leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.69)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.46)] via-[rgba(213,216,234,0.67)] to-[rgba(223,226,245,0.63)] bg-clip-text text-transparent ">
                {t("ysu.time")}
              </span>
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full flex flex-row transition-all duration-300 gap-3"
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: 20,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            transform: combinedTransform,
            opacity,
            willChange: "transform, opacity",
          }}
        >
          <motion.div
            className="min-w-[90px] w-[90px] h-[90px] rounded-2xl overflow-hidden transition-all duration-500"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.08) 0px 0.482901px 1.06238px -0.5px, rgba(0, 0, 0, 0.23) 0px 4px 8.8px -1px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img src={"/inova.jpeg"} alt="Ysu" className="w-full h-full" />
          </motion.div>
          <div className="flex flex-col relative z-1 justify-evenly">
            <p className="text-start text-[18px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
                Innova IT Center
              </span>
            </p>
            <p className="text-start text-[18px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.52)] via-[rgba(213,216,234,0.83)] to-[rgba(223,226,245,0.87)] bg-clip-text text-transparent ">
                Frontend Development (ReactJS)
              </span>
            </p>
            <p className="text-center text-[16px] font-medium leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.69)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.46)] via-[rgba(213,216,234,0.67)] to-[rgba(223,226,245,0.63)] bg-clip-text text-transparent ">
                {t("innova_time")}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
});
