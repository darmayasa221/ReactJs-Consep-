import React from "react";
const style = {
  height: "5vh",
  width: "10vw",
  borderRadius: "5px",
  borderColor: "transparent",
};

const Button = (props) => {
  return (
    <button style={style} className={props.classes} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
