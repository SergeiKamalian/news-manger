import { memo, useRef } from "react";
import type { ExperienceItemType } from ".";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
interface Props {
  item: ExperienceItemType;
}

export const ExperienceItem = memo((props: Props) => {
  const { item } = props;

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

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col gap-1 transition-all duration-300"
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
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row md:gap-6 gap-3">
          <motion.div
            className="md:w-[90px] md:h-[90px] w-[60px] h-[60px] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.08) 0px 0.482901px 1.06238px -0.5px, rgba(0, 0, 0, 0.23) 0px 4px 8.8px -1px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img src={item.logo} alt="Telcell" className="w-full h-full" />
          </motion.div>
          <div className="flex flex-col relative z-1 justify-evenly">
            <p className="text-center text-[24px] md:text-[36px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
                {item.name}
              </span>
            </p>
            <p className="text-center text-[14px] md:text-[20px] font-medium leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.69)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.46)] via-[rgba(213,216,234,0.67)] to-[rgba(223,226,245,0.63)] bg-clip-text text-transparent ">
                {item.exp}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:ml-[114px] mt-[10px] flex flex-col gap-2">
        {item.list.map((i, index) => (
          <p
            key={index}
            className="text-[20px] font-[200] leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.69)] font-sans w-fit"
          >
            <span className="bg-gradient-to-b from-[rgba(190,193,207,0.46)] via-[rgba(213,216,234,0.67)] to-[rgba(223,226,245,0.63)] bg-clip-text text-transparent ">
              <span className="mr-1">•</span> {i}
            </span>
          </p>
        ))}
      </div>
      <div className="md:ml-[114px] mt-[10px] text-white flex gap-3">
        <p className="text-[20px] font-[500] leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.83)] font-sans w-fit">
          <span className="bg-gradient-to-b from-[rgba(190,193,207,0.67)] via-[rgba(213,216,234,0.87)] to-[rgba(223,226,245,0.86)] bg-clip-text text-transparent ">
            {item.technologies}
          </span>
        </p>
      </div>
    </motion.div>
  );
});
