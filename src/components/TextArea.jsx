import React from "react";

const TextArea = (props) => {
  const { name, id, className, cols, rows, defaultValue, onChange } = props;
  return (
    <div>
      <textarea
        name={name}
        id={id}
        className={className}
        cols={cols}
        rows={rows}
        defaultValue={defaultValue}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
