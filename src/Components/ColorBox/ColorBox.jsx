import React from "react";
import "./ColorBox.css";

export default function ColorBox({ background }) {
  return <div className={`${background}`}></div>;
}
