import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { memo, useRef, type ReactNode } from "react";

export const Contact = memo(() => {
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

  const contactItem = (type: string, value: string, icon: ReactNode) => {
    return (
      <motion.div
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
        <div className="flex flex-row items-center gap-5">
          {icon}
          <div className="flex flex-col">
            <p className="text-start text-[16px] font-medium leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
                {type}
              </span>
            </p>
            <p className="text-start text-[16px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
              <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
                {value}
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className="max-w-[1100px] m-auto text-white mt-[70px] flex flex-row justify-between  relative"
      ref={ref}
    >
      <div className="flex flex-col gap-6">
        <p className="text-center text-[50px] font-bold leading-[1.4em] tracking-[-0.02em] text-[rgba(209,213,230,0.87)] font-sans w-fit">
          <span className="bg-gradient-to-b from-[rgba(190,193,207,0.64)] via-[rgba(213,216,234,0.89)] to-[rgb(223,226,245)] bg-clip-text text-transparent ">
            Get in touch
          </span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {contactItem("Phone", "+374 93 604-808", <Phone />)}
          {contactItem("Email", "qamalyan2021gmail.com", <Mail />)}
          {contactItem("Address", "Yerevan, Armenia", <MapPin />)}
          <div className="flex flex-row gap-4 items-center justify-center">
            <a href="https://www.linkedin.com/in/sergey-kamalyan-37579524a/">
              <img src="/linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://github.com/SergeiKamalian">
              <img src="/github.svg" alt="github" />
            </a>
            <a href="https://t.me/qamalyannnn">
              <img src="/telegram.svg" alt="telegram" />
            </a>
            <a href="/Sergey-Kamalyan-CV.pdf" download>
              <img src="/cv.svg" alt="telegram" />
            </a>
          </div>
        </div>
      </div>

      <motion.img
        src="/main-footer.png"
        alt="Photo"
        className="w-[45%] grayscale-[0.4] absolute right-[-10%] bottom-[-30%]"
      />
    </div>
  );
});
