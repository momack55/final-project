import React, { Component } from "react";
import API from "../utils/API";
import eventCard from "../components/eventCard";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    image: "",
    title: "",
    url: "",
    start_time: "", 
    description: "", 
    saved: false, 
    savedCount: 0
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
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.saved = 1 === true;

      // Set newState.savedCount equal to its current value or its current value + 1 depending on whether the user likes the event
      newState.savedCount = newState.saved
        ? newState.savedCount + 1
        : newState.savedCount;
    } else {
      // If we thumbs down'ed the event, we haven't saved it
      newState.saved = false;
    }
    // Replace our component's state with newState, load the next event image
    this.setState(newState);
    this.loadNextEvent();
  };

  loadNextEvent = () => {
    API.getRandomEvent()
      .then(res =>
        this.setState({
          image: res.data.message,
          title: res.data.message,
          description: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Find events near you!</h1>
        <h3 className="text-center">
          Thumbs up to save an event to your page!
        </h3>
        <eventCard image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          You have {this.state.savedCount} events saved so far!
        </h1>
        <Alert style={{ opacity: this.state.saved ? 1 : 0 }} type="success">
          You have saved this event!
        </Alert>
      </div>
    );
  }
}

export default Search;
