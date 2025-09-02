import React from "react";

const textVariants = {
  default: "text-xl",
  muted: "text-xl text-text-secondary",
  heading: "text-2xl",
  blast: "text-3xl",
};

export default function Text({
  as: Component = "span",
  variant = "default",
  className = "",
  children,
  ...props
}) {
  return (
    <Component className={`${textVariants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
