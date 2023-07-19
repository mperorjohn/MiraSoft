import React from "react";

const Label = (props) => {
  const { text, className, htmlFor } = props;
  return (
    <div className={className} htmlFor={htmlFor}>
      {text}
    </div>
  );
};

export default Label;
