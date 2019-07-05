import React from "react";
import "./style.css";

function PassBtn(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`pass-btn ${props["data-value"]}`} {...props} />

  );
}

export default PassBtn;