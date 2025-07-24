import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { memo, useRef } from "react";
import { useTranslation } from "react-i18next";

export const Skills = memo(() => {
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
    <div
      className="w-full mt-[50px] md:mt-[70px] max-w-[1140px] px-[20px] m-auto flex flex-col gap-6"
      ref={ref}
    >
      <p className="text-center text-[40px] lg:text-[50px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
        <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
          {t("skills")}
        </span>
      </p>{" "}
      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 24,
        }}
      >
        <motion.div className="w-full flex flex-col transition-all duration-300 gap-3">
          <div className="flex flex-row flex-wrap gap-2">
            {`React.js, Next.js, TypeScript, Redux, Effector, Redux Toolkit, RTK Query,
              Styled-components, SCSS/SASS, Tailwind CSS, Framer Motion,
              Storybook, Cypress, Jest, Formik/Yup, React-hook-form, i18next, Firebase, React
              Email, Node.js, Express.js, NestJS, Redis,
WebSocket (ws), MongoDB, Vite, Webpack, Babel, esbuild, pnpm, Turborepo, FSD / Atomic Design, JSDoc, EsLint, Prettier, CI/CD pipelines`
              .split(",")
              .map((i) => (
                <motion.div
                  key={i}
                  style={{
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: 20,
                    padding: 14,
                    boxShadow:
                      "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transform: combinedTransform,
                    opacity,
                    willChange: "transform, opacity",
                  }}
                >
                  <p
                    key={i}
                    className="text-start text-[16px] md:text-[24px] font-normal leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit"
                  >
                    <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
                      {i}
                    </span>
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});
