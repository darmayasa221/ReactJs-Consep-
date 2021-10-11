import React from "react";
const style = {
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
};
const Card = (props) => {
  return (
    <div style={style} className={props.classes}>
      {props.children}
    </div>
  );
};

export default Card;
