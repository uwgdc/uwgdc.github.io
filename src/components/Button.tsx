import { Button as HeadlessButton } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(
  [
    "inline-flex justify-center border-2 font-bold shadow-sm transition-all  duration-150 uppercase",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary hover:bg-primary-600 active:bg-primary-700 text-white border-white/50 bg-linear-to-t from-black/5 to-white/0",
        outlined:
          "border-dashed border-primary text-primary hover:text-primary-600 active:text-primary-700 hover:border-primary-600 active:border-primary-700",
        secondary:
          "bg-secondary text-black border-white/50 bg-linear-to-t from-black/5 to-white/0 hover:bg-secondary-600 active:bg-secondary-700",
      },
      size: {
        md: "px-4 py-2",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
  return (
    <HeadlessButton
      className={button({ variant, size })}
      data-variant={variant}
      data-size={size}
      {...props}
    ></HeadlessButton>
  );
};
