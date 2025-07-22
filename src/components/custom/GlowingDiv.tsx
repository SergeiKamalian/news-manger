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
}

export function GrowingDiv({
  children,
  icon,
  customSize = "md",
  className,
  ...rest
}: AppButtonProps) {
  const iconSizeClass = customSize === "lg" ? "h-7 w-7" : "h-6 w-6";
  const paddingClass = customSize === "lg" ? "px-1 py-1" : "px-1 py-1";
  const heightClass = customSize === "lg" ? "h-12" : "h-9";

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
    <div className="relative inline-block p-[1px] overflow-hidden rounded-xl w-fit">
      <div className="absolute inset-0">
        <MovingBorder duration={5000} rx="20%" ry="20%">
          <div className="h-20 w-20 bg-[radial-gradient(#2B8C5A_40%,transparent_60%)] opacity-70" />
        </MovingBorder>
      </div>

      <Button
        className={cn(
          `relative flex items-center gap-2 text-[16px] font-normal border-none rounded-xl
           bg-[#0D0D0D] text-[#9BC7B1] 
           ${paddingClass} ${heightClass}`,
          className
        )}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.18) 0px 0.6px 0.6px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.2px 2.2px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px",
          backdropFilter: "blur(10px)",
          border: "1px solid #2B8C5A1C",
        }}
        {...rest}
      >
        {renderIcon()}
        {children}
      </Button>
    </div>
  );
}

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
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
