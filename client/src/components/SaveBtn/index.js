import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <span  className="save-btn" {...props} role="button" tabIndex="0">
      &#128151;
    </span>
  );
}

export default SaveBtn;
