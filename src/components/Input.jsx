import React from "react";

const Input = (props) => {
  const {
    type,
    className,
    placeholder,
    required,
    id,
    onClick,
    onChange,
    disabled,
    onFocus,
  } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      required={required}
      id={id}
      disabled={disabled}
      onClick={onClick}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default Input;
