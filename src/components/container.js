import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={` ${className} w-full max-w-400 mx-auto  `}>{children}</div>
  );
}
