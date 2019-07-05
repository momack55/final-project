// import React from "react";
// import CardBtn from "../cardBtn";
// import "./style.css";

// const description = dangerouslySetInnerHTML;

// function Card(props) {
//   return (
//     // <div
//     //   className="card"
//     //   style={{
//     //     backgroundImage: props.image ? `url(${props.image})` : "none"
//     //   }}
//     // >

//     <div className="card">
//       <img className="card-img-top" src={{ backgroundImage: props.image ? `url(${props.image})` : "none"}} alt="img" />
//       <div className="card-body">
//         <h3 className="card-title" id="title">{props.title}</h3>
//         <p className="card-text" id="description">{props.description}</p>
//         <p className="card-text" id="date">{props.date}</p>
//       </div>
//       {/* icon for load */}
//       {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
//       {/* button to generate next event */}
//       <CardBtn
//         style={{ opacity: props.image ? 1 : 0 }}
//         onClick={props.handleBtnClick}
//         data-value="pass"
//       />
//       {/* button to save event */}
//       <CardBtn
//         style={{ opacity: props.image ? 1 : 0 }}
//         onClick={props.handleBtnClick}
//         data-value="pick"
//       />
//     </div>
//   );
// }

// export default Card;

import React from "react";

function Card({ icon, title, children }) {
    return (
      <div className="card mt-4">
        <div className="card-header">
          <h3>
            <strong>
              <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
            </strong>
          </h3>
        </div>
        <div className="card-body">{children}</div>
      </div>
    );
  }
  
  export default Card;