import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "xl";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 md:px-6 lg:px-8",
          {
            "max-w-7xl": size === "default",
            "max-w-5xl": size === "sm",
            "max-w-screen-2xl": size === "lg",
            "max-w-none w-full": size === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container }; 