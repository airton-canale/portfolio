import React from "react";

const GradientButton = ({ className, text, ...props }) => {
  return (
    <div className={className}>
      <img {...props} />
      <p>{text}</p>
    </div>
  );
};

export default GradientButton;
