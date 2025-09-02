import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-background shadow-custom rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
