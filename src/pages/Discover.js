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
    image: "",
    title: "",
    description: "",
    url: "", 
    date: "",
    save: false,
    saveCount: 0
  };

  // When the component mounts, load the next event to be displayed
  componentDidMount() {
    this.loadNextEvent();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.save to true when buton is picked 
      newState.save = 1;
      //newState.save = true;

      // Set newState.saveCount equal to its current value or its current value + 1 when user saves event
      newState.saveCount = newState.save
        ? newState.saveCount + 1
        : newState.saveCount;
    } else {
      // If we thumbs down'ed the event, we haven't saveed with it
      newState.save = false;
    }
    // Replace our component's state with newState, load the next event image
    this.setState(newState);
    this.loadNextEvent();
  };

  loadNextDog = () => {
    API.getEvent()
      .then(res =>
        this.setState({
          image: res.data.message
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
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          You have saved {this.state.saveCount} events so far!
        </h1>
        {/* <Alert style={{ opacity: this.state.save ? 1 : 0 }} type="success">
          Yay! You have event savees!!! Go to your profile to check them out. 
        </Alert> */}
        </Col>
        </Row>
      </Container>
      </div>
      
    );
  }
}

export default Discover;
