import { memo, useEffect, useRef } from "react";

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const ShootingStars = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = Math.floor(getRandom(10, 13));

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");

      const tailLength = `${getRandom(3, 5.5).toFixed(2)}em`;
      const topOffset = `${getRandom(0, 100).toFixed(2)}vh`;
      const duration = `${getRandom(7, 10).toFixed(2)}s`;
      const delay = `${getRandom(0, 5).toFixed(2)}s`;

      Object.assign(star.style, {
        position: "absolute",
        top: topOffset,
        left: "0",
        width: tailLength,
        height: "1px",
        backgroundImage: "linear-gradient(45deg, white, transparent)",
        borderRadius: "9999px",
        filter: "drop-shadow(0 0 5px white)",
        transform: "translate3d(104em, 0, 0)",
        animation: `fall ${duration} ${delay} linear infinite, tail-fade ${duration} ${delay} ease-out infinite`,
        zIndex: 3,
      });

      star.className = "pointer-events-none";

      // хвосты
      const before = document.createElement("div");
      const after = document.createElement("div");
      [before, after].forEach((el) => {
        Object.assign(el.style, {
          position: "absolute",
          top: "0",
          left: "calc(var(--star-width, 2px) / -2)",
          width: "var(--star-width, 2px)",
          height: "100%",
          backgroundImage:
            "linear-gradient(45deg, transparent, white, transparent)",
          borderRadius: "9999px",
          animation: "blink 2s linear infinite",
        });
      });
      before.style.transform = "rotate(45deg)";
      after.style.transform = "rotate(-45deg)";
      star.appendChild(before);
      star.appendChild(after);

      container.appendChild(star);
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 h-[600px] max-w-[1000px] w-full rotate-[200deg] overflow-hidden pointer-events-none z-[-1] left-[-30px] top-[-100px]"
      />
    </>
  );
});
