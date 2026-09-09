import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6 backdrop-blur-md transition-all duration-300",
        hoverEffect && "hover:border-white/[0.18] hover:bg-zinc-900/80 hover:shadow-lg hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
