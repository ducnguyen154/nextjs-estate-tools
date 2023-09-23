import React from "react";

type FormTextProps = {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  name?: string;
  onChange?: (...args: any[]) => void;
};

const FormText: React.FC<FormTextProps> = ({
  className = "",
  name = "",
  defaultValue = "",
  placeholder = "",
  onChange = () => {},
}) => {
  return (
    <>
      <textarea
        className={`form-textarea block w-full mt-1 border rounded-md border-gray-300 ${className}`}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default FormText;
