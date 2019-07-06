// import React from "react";
// import "./style.css";

// function DeleteBtn(props) {
//   return (
//     <span className="delete-btn" {...props} role="button" tabIndex="0">
//       ✗
//     </span>
//   );
// }

// export default DeleteBtn;

import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`delete-btn ${props["data-value"]}`} {...props} />

  );
}

export default DeleteBtn;
