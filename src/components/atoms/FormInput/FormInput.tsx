import React, { useState } from "react";

type FormInputProps = {
  className?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  defaultValue?: string | number;
  onChange?: (...agrs: any[]) => void;
};

const FormInput: React.FC<FormInputProps> = ({
  type = "input",
  placeholder = "",
  className = "",
  name = "",
  defaultValue = "",
  onChange = () => {},
}) => {
  const formType = `form-${type}`;
  return (
    <input
      type={type}
      className={`${formType} mt-1 block w-full rounded-md border border-gray-300 ${className}`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
    />
  );
};

export default FormInput;
