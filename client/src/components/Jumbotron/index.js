import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", opacity:".8", marginTop:"100px", background: "black", color:"white" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
