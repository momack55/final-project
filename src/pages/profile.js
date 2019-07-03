import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/Col";
import SavedEvents from "../components/savedEvents";
import API from "../utils/API";

class Profile extends Component {
  state = {
    events: []
  };

  //when the component mounts, gets all events saved in the database
  componentDidMount() {
    this.getSavedEvents();
  }

  //function to get saved books
  getSavedEvents = () => {
    API.getEvents() 
      .then(res => this.setState({ savedEvents: res.data }))
      .catch(err => console.log(err));
  }

  //function to remove book by id
  handleDeleteButton = id => {
    API.deleteEvent(id) 
      .then(res => this.getSavedEvents())
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <Hero backgroundImage="https://thumbs.gfycat.com/RightDisloyalGallinule-size_restricted.gif" >
          <h1>My Events</h1>
          <h3>Manage your saved events</h3>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
            <SavedEvents results={this.state.results} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Profile;