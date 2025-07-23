import { memo, useRef } from "react";
import type { ProjectType } from "../../constants";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

interface WorkItemProps {
  project: ProjectType;
  isActive?: boolean;
}

export const WorkItem = memo((props: WorkItemProps) => {
  const { project, isActive } = props;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.2,
  });
  const opacity = useTransform(smoothProgress, [0, 0.4], [0.6, 1]);
  const scale = useTransform(smoothProgress, [0, 0.4], [0.9, 1]);
  const rotateX = useTransform(smoothProgress, [0, 0.4], [10, 0]);
  const combinedTransform = useTransform(
    [scale, rotateX],
    ([s, rx]) => `scale(${s}) rotateX(${rx}deg)`
  );

  return (
    <motion.div className="w-full relative group cursor-pointer" ref={ref}>
      <div className="w-[90%] left-[5%] relative bottom-0  flex items-center justify-center">
        <div
          className={`
          w-[20%] h-[20%] bg-[#00000051] absolute mt-12 rounded-full
          transition-opacity duration-300 group-hover:opacity-100
          ${isActive ? "opacity-100 md:opacity-0" : "opacity-0"}
        `}
          style={{
            boxShadow: project.boxShadow,
          }}
        />
        <motion.div
          className="relative origin-bottom bottom-[-15px]"
          style={{
            opacity,
            transform: combinedTransform,
            willChange: "transform, opacity",
          }}
        >
          <motion.img
            src={project.preview}
            alt="alt"
            style={{
              objectFit: "contain",
            }}
            className="transition-transform duration-700  origin-bottom"
          />
        </motion.div>
      </div>
      <div
        className="w-full flex flex-col gap-1 transition-all duration-300"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.02)",
          borderRadius: 20,
          padding: 20,
          boxShadow:
            "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <span
          style={{
            color: "rgb(173, 173, 173)",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "8px",
            padding: "4px 8px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            fontSize: 12,
          }}
          className="w-fit"
        >
          {project.type}
        </span>
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col">
            <p className="text-center text-[30px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
                {project.name}
              </span>
            </p>
            <span
              style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: 200 }}
            >
              {project.description}
            </span>
          </div>
          <motion.div
            className="md:w-[64px] md:h-[64px] w-[50px] h-[50px] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 group-hover:grayscale-0 grayscale"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.08) 0px 0.482901px 1.06238px -0.5px, rgba(0, 0, 0, 0.23) 0px 4px 8.8px -1px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img src={project.logo} alt="Telcell" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});
