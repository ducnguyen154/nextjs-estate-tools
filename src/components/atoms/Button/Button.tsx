import React from "react";

interface ButtonProps {
  className?: string;
  type?: string;
  text: string;
  onClick?: React.MouseEventHandler<Element>;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  type = "primary",
  text,
  onClick = () => {},
}) => {
  const defaultClassName =
    "block px-5 py-2 rounded-md border-gray-300 shadow-md";
  const typeClasses: any = {
    primary: "bg-sky-700 hover:bg-sky-600 active:bg-sky-700 text-white ",
  };
  return (
    <button
      className={`${defaultClassName} ${typeClasses[type]}${
        className ? ` ${className}` : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
