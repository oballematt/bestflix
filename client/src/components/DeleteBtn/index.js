import React from "react";


function DeleteBtn(props) {
  return (
    <span className="cntrl-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
