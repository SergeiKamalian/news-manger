"use client";

import { Plus, Trash, Edit2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

import type { ReactNode, ComponentProps } from "react";

interface AppButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  icon?: "plus" | "edit" | "delete";
  customSize?: "md" | "lg";
  isDownload?: boolean;
}

export function AppButton({
  children,
  icon,
  customSize = "md",
  isDownload = false,
  className,
  ...rest
}: AppButtonProps) {
  const iconSizeClass = customSize === "lg" ? "h-7 w-7" : "h-6 w-6";
  const paddingClass = customSize === "lg" ? "px-3 py-4" : "px-4 py-4";
  const heightClass = customSize === "lg" ? "h-12" : "h-10";

  const renderIcon = () => {
    switch (icon) {
      case "plus":
        return <Plus className={iconSizeClass} />;
      case "edit":
        return <Edit2 className={iconSizeClass} />;
      case "delete":
        return <Trash className={iconSizeClass} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative inline-block p-[1px] overflow-hidden rounded-xl group">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <MovingBorder duration={3000} rx="20%" ry="20%">
          <div className="h-20 w-20 bg-[radial-gradient(#959598b5,transparent_60%)] opacity-70" />
        </MovingBorder>
      </div>

      <Button
        className={cn(
          `relative flex items-center gap-2 text-[16px] font-normal border-none rounded-xl
           bg-[rgb(25,25,31)] text-[#f5f5f5] 
           ${paddingClass} ${heightClass} ${isDownload ? "w-full" : ""}`,
          className
        )}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.18) 0px 0.6px 0.6px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.2px 2.2px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px",
          backdropFilter: "blur(10px)",
          textShadow: "rgba(255, 255, 255, 0.33) 0px 0px 7px",
        }}
        {...rest}
      >
        {renderIcon()}
        {children}
      </Button>
    </div>
  );
}

// ✅ Анимация движущейся границы
function MovingBorder({
  children,
  duration = 3000,
  rx,
  ry,
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-full w-full"
        preserveAspectRatio="none"
      >
        <rect
          ref={pathRef}
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
          transition: "all 0.3s",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
