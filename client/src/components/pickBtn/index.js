import React from "react";
import "./style.css";

function PickBtn(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`pick-btn ${props["data-value"]}`} {...props} />

  );
}

export default PickBtn;