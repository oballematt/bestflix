import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      &#128151;
    </span>
  );
}

export default DeleteBtn;
