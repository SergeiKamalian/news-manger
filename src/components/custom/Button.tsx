import { Plus, Trash, Edit2 } from "lucide-react";
import { Button } from "../ui/button";
import type { ReactNode, ComponentProps } from "react";

interface AppButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  icon?: "plus" | "edit" | "delete";
  customSize?: "md" | "lg";
}

export function AppButton({
  children,
  icon,
  customSize = "md",
  className,
  ...rest
}: AppButtonProps) {
  const iconSizeClass = customSize === "lg" ? "h-7 w-7" : "h-6 w-6";
  const paddingClass = customSize === "lg" ? "px-3 py-4" : "px-2 py-2";
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
    <Button
      variant="ghost"
      style={{ borderColor: "#000000CC" }}
      className={`w-fit text-[16px] font-normal bg-[#DEDEDE] text-[#1D1D1D] border rounded-xl hover:bg-[#e0e0e0] ${paddingClass} ${heightClass} ${
        className ?? ""
      }`}
      {...rest}
    >
      {renderIcon()}
      {children}
    </Button>
  );
}
