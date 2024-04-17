import React from "react";

const sizes = {
  "5xl": "text-2xl font-medium md:text-[22px]",
  "6xl": "text-[28px] font-medium md:text-[26px] sm:text-2xl",
  "7xl": "text-[38px] font-medium md:text-4xl sm:text-[34px]",
  "8xl": "text-[39px] font-medium md:text-[37px] sm:text-[35px]",
  "2xl": "text-lg font-medium",
  "3xl": "text-xl font-medium",
  "4xl": "text-[21px] font-medium",
  xs: "text-xs font-medium",
  lg: "text-base font-medium",
  s: "text-sm font-medium",
  xl: "text-[17px] font-medium",
  "9xl": "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  "10xl": "text-[54px] font-medium md:text-[46px] sm:text-[40px]",
  md: "text-[15px] font-medium",
  "11xl": "text-[64px] font-medium md:text-5xl",
  "12xl": "text-7xl font-medium md:text-5xl",
  "13xl": "text-[120px] font-normal md:text-5xl",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-300 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
