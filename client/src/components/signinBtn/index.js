import React from "react";
import "./style.css";

function SigninBtn(props) {
  return (
    <button onClick={props.onClick} className={`signin-btn ${props["data-value"]}`} {...props} />
  );
}

export default SigninBtn;
