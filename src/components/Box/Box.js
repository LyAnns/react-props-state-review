import React from "react";
import "./box.css";
import InnerBox from "../InnerBox/InnerBox";

function Box(props) {
  console.log("Box Component Props:", props);
  return (
    <div
      className="box"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
      }}
    >
      {props.boxTitle}
      <InnerBox
        // Example of passing props down multiple levels. All three props, textColor, backgroundColor, and boxTitle, were originally sent down from Box's parent as prop. We used them here in this component but can also forward them onto another child if we need to.
        backgroundColor={props.textColor}
        textColor={props.backgroundColor}
        boxTitle={props.boxTitle}
      />
    </div>
  );
}

export default Box;
