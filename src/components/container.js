import React from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={` ${className} w-full max-w-[1400px] mx-auto px-4 md:px-8 `}
    >
      {children}
    </div>
  );
}
