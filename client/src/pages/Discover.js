import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/Col";
import API from "../utils/API";
import Card from "../components/Card";
//import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    event: [],
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextEvent();
    console.log()
  }

  // handleBtnClick = event => {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;
  //   // Clone this.state to the newState object
  //   // We'll modify this object and use it to set our component's state
  //   const newState = { ...this.state };

  //   if (btnType === "pick") {
  //     // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
  //     newState.match = 1 === Math.floor(Math.random() * 5) + 1;

  //     // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  //     newState.matchCount = newState.match
  //       ? newState.matchCount + 1
  //       : newState.matchCount;
  //   } else {
  //     // If we thumbs down'ed the dog, we haven't matched with it
  //     newState.match = false;
  //   }
  //   // Replace our component's state with newState, load the next dog image
  //   this.setState(newState);
  //   this.loadNextEvent();
  // };

  loadNextEvent = () => {
    API.getEvents()
      .then(res =>
        this.setState({
          event: res.data.events.event[0].title
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Hero backgroundImage="https://thumbs.gfycat.com/RightDisloyalGallinule-size_restricted.gif" >
        <h1>Local Events</h1>
        <h3 className="text-center">Thumbs up on any events you want to save for later</h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
        <h1>Title: {this.state.event}</h1>
        </Col>
        </Row>
      </Container>
      </div>
      
    );
  }
}

export default Discover;