import React from "react";

const shapes = {
  round: "rounded-[19px]",
} as const;
const variants = {
  outline: {
    blue_400: "border-blue-400 border border-solid text-blue_gray-300",
    gray_900: "border-gray-900 border border-solid text-gray-900",
  },
  fill: {
    blue_400: "bg-blue-400 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
} as const;
const sizes = {
  md: "h-[50px] px-8 text-sm",
  xs: "h-[32px] px-[23px] text-sm",
  sm: "h-[38px] px-[21px] text-sm",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "sm",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-sm ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
