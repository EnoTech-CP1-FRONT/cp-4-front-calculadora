import React from "react";
import Text from "./Text";

const buttonVariants = {
  default: "bg-background",
  primary: "bg-primary",
};

export default function Button({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  return (
    <Text
      as="button"
      variant="heading"
      className={`
        flex items-center justify-center rounded-xl
        p-3 cursor-pointer text-text
        bg-gradient-to-b from-purple-500 to-blue-900
        hover:from-black/50 hover:to-white/10
        shadow-custom
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Text>
  );
}
