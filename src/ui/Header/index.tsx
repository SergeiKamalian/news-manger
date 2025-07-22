import { memo } from "react";
import { AppButton } from "../../components";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

export const Header = memo(() => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const translateX = useMotionValue(-50);

  const combinedTransform = useTransform(
    [translateX, scale],
    ([x, s]) => `translateX(${x}%) scale(${s})`
  );

  return (
    <motion.div
      style={{
        opacity,
        transform: combinedTransform,
      }}
      className="fixed top-[60px] left-1/2 w-full max-w-[1100px] flex items-center justify-between"
    >
      <div className="flex flex-col justify-start opacity-90">
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
          Front-end developer
        </motion.h2>
      </div>
      <motion.div
        className="flex flex-row gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <AppButton>Work</AppButton>
        <AppButton>Resume</AppButton>
        <AppButton>Contact</AppButton>
      </motion.div>
    </motion.div>
  );
});
