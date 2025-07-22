import { memo } from "react";
import { ShootingStars } from "./StarsSvg";

export const Background = memo(() => {
  return (
    <div className="fixed w-full h-screen bg-black">
      <div
        className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0 opacity-100 will-change-transform"
        style={{
          background:
            "radial-gradient(91.9% 83.1% at 100% 10%, #22222494, #08080800)",
          transform: "perspective(1200px)",
          flex: "none",
          position: "fixed",
        }}
      >
        <img
          src="../../../stars.svg"
          alt="stars"
          className="shrink-0 opacity-15 bg-cover w-[1000px] h-[543px] "
          style={{ userSelect: "none" }}
        />
        <ShootingStars />
      </div>
    </div>
  );
});
