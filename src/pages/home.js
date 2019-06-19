import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      {/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg"> */}
      <Hero>
        <h1>Pupster</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Local Meet Up!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>
              Looking for something to do this weekend? Look no further. 
            </h3>

            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
