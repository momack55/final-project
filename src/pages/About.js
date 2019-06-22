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
      <Hero backgroundImage="https://thumbs.gfycat.com/RightDisloyalGallinule-size_restricted.gif" >
        <h1>Fun Finder!</h1>
        <h3>Looking for something to do this weekend? Look no further.</h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Fun Finder!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>Just thumps up the event that you are interested in to save for later.</p>
            <p>Not interested? no problem. Thumbs down to search for another event.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque felis imperdiet proin fermentum leo vel orci. Dui nunc mattis enim ut tellus elementum sagittis. Pellentesque elit eget gravida cum sociis natoque penatibus et. Quam quisque id diam vel quam elementum pulvinar etiam. Dolor magna eget est lorem ipsum. Lobortis elementum nibh tellus molestie nunc non. Facilisis leo vel fringilla est ullamcorper eget. </p>
            <p>Amet aliquam id diam maecenas ultricies mi eget mauris. Etiam tempor orci eu lobortis elementum. Vel eros donec ac odio tempor orci dapibus. Donec adipiscing tristique risus nec feugiat in. Senectus et netus et malesuada fames ac turpis egestas. Lectus nulla at volutpat diam ut. Risus sed vulputate odio ut enim blandit volutpat. Rhoncus dolor purus non enim praesent elementum facilisis. Viverra justo nec ultrices dui sapien. Aliquet nibh praesent tristique magna sit. Id leo in vitae turpis. At erat pellentesque adipiscing commodo elit at imperdiet. Vitae et leo duis ut diam. Auctor elit sed vulputate mi sit amet mauris commodo.</p>
          </Col>
          {/* <Col>
            <SignupBtn />
            <LoginBtn />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default About;
