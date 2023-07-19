import React from "react";

const LabelAstrisk = (props) => {
  const { text, className, htmlFor } = props;
  return (
    <div className={className} htmlFor={htmlFor}>
      {text}
      <span className="text-danger">*</span>
    </div>
  );
};

export default LabelAstrisk;
