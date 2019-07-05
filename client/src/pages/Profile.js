import React from "react";
import Hero from "../components/Hero";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/Col";
// import SavedEvents from "../components/savedEvents";
import API from "../utils/API";
import Card from "../components/Card";
import List from "../components/list";
import Event from "../components/event";

class Profile extends React.Component {
  state = {
    events: []
  };

  //when the component mounts, gets all events saved in the database
  componentDidMount() {
    this.getSavedEvents();
  }

  //function to get saved books
  getSavedEvents = () => {
    API.getSavedEvents() 
      .then(res => this.setState({ events: res.data }))
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
            {/* <savedEvents results={this.state.results} /> */}
            {/* <SavedEvents savedEvents={this.state.savedEvents} handleDeleteButton={this.handleDeleteButton} /> */}
            <Card icon="download">
              {this.state.events.length ? (
                <List>
                  {this.state.events.map(event => (
                    <Event
                      key={event._id}
                      title={event.title}
                      link={event.link}
                      description={event.description}
                      // image={event.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleDeleteBtn(event._id)}
                          className="btn btn-danger ml-2"
                        ><i class="fas fa-trash-alt"></i>&nbsp;
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Eventss</h2>
              )}
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;