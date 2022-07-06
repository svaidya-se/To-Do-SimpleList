import React from "react";

export default function Welcome() {
  let myStyle = {
    fontfamily: "ArialBlack, sans-serif",
    fontsize: "4.5em",
    letterspacing: "-1px",
    backgroundcolor: " black",
    color: "black",
    minHeight: "80vh"
  }
  return (
    <h1 className="container my-3 text-center" style={myStyle}>
      Welcome to Saurav Design's ToDo List
    </h1>
  );
}
