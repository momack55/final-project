import React from "react";
import Hero from "../components/Hero";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/Col";
//import LoginBtn from "../components/loginBtn";
//import SignupBtn from "../components/signupBtn";

function About() {
  return (
    <div>
      {/* <Hero backgroundImage="http://pluspng.com/img-png/bokeh-png-20-beautiful-hd-bokeh-wallpapers-1920.jpg"> */}
      <Hero>
        <h1>Local Event App!</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Local Event App!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>
              Looking for something to do this weekend? Look no further. 
            </h3>
            <p>Just thumps up the event that you are interested in to save for later.</p>
            <p>Not interested? no problem. Thumbs down to search for another event.</p>
          </Col>
          <Col>
            {/* <SignupBtn /> */}
            {/* <LoginBtn /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
