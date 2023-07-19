import React from "react";

const Button = (props) => {
  const { text, className, icon, type, id, disabled } = props;
  return (
    <button className={className} type={type} id={id} disabled={disabled}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
