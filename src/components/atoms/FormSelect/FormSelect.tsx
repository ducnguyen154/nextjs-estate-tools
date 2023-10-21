import React from "react";

type optionsProps = {
  value: string | number;
  text: string;
};

type FormSelectProps = {
  name?: string;
  defaultValue?: number | string;
  options: optionsProps[];
  isBlankFirst?: boolean;
  blankText?: string;
  onChange?: (...args: any[]) => void;
};

const FormSelect: React.FC<FormSelectProps> = ({
  name = "",
  defaultValue = "",
  options = [],
  isBlankFirst = false,
  blankText = "Please select one",
  onChange = () => {},
}) => {
  console.log(defaultValue);
  const renderOptions = options.map((option, i) => (
    <option key={i} value={option.value as string}>
      {option.text}
    </option>
  ));
  return (
    <>
      <select
        className="form-select block w-full mt-1 border rounded-md border-gray-300"
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {isBlankFirst && <option value="">{blankText}</option>}
        {renderOptions}
      </select>
    </>
  );
};

export default FormSelect;
