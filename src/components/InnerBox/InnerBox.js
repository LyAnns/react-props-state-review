import React from "react";
import "./inner-box.css";

function Box(props) {
  console.log("Inner Box Component Props:", props);
  return (
    <div
      className="inner-box"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
      }}
    >
      {props.boxTitle}
    </div>
  );
}

export default Box;
