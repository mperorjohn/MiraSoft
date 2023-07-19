import React from "react";

const Img = (props) => {
  const { src, className, alt, width, height, style } = props;
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default Img;
