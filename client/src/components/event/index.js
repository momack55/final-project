import React from "react";
import ListItem from "../listItems";
import Row from "../row";
import Col from "../Col";
// import "./style.css";

function Event({ title, description, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {description && <h5 className="font-italic">{description}</h5>}
        </Col>
        {/* <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col> */}
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Event;