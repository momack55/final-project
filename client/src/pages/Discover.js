import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/Col";
import API from "../utils/API";
import CardBtn from "../components/cardBtn";
//import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    eventId: [],
    event: [],
    description: [],
    startTime: [],
    image: [],
    url: [],
    // match: false,
    // matchCount: 0
  };

  // When the component mounts, load the next event to be displayed
  componentDidMount() {
    this.loadNextEvent();
    console.log();
  }

  //function to save event to db on thumbs up

  // handlePickButton = e => {
  //   console.log(e);
  //   console.log(this.state.event)
  //   let savedEvents = this.state.events.filter(event => event.id === e.target.id)
  //   savedEvents = savedEvents[0];
  //   API.saveEvent(savedEvents)
  //   // API.saveEvent(this.state.event)
  //       .then(this.setState({ message: console.log("Your event is saved") }))
  //       .catch(err => console.log(err))
  // };

  handlePickButton = id => {
    console.log(this.state);
    // console.log(id);
    // const event = this.state.event.find(event => event.id === id);
    const event = this.state.event.find(event => event.id === id);
    console.log(event);
    // API.saveEvent({
    //   eventId: event.id,
    //   event: event.title,
    //   // url: event.url,
    //   description: event.description,
    //   startTime: event.start_time,
    //   venue: event.venue
    //   // image: event.image
    // }).then(() => this.loadNextEvent())
    //   .then(console.log("You have saved the event " + this.state.event + "!"))
    //   .catch(err => console.log(err));
  };



  // function to load next event on thumbs down
  handlePassButton = (e) => {
    console.log(e);
    console.log(this.state);
    this.loadNextEvent();
  };

  //function to load next event
  loadNextEvent = () => {
    API.getEvents()
      .then(res =>
        this.setState({
          id: res.data.events.event[0].id,
          event: res.data.events.event[0].title,
          description: res.data.events.event[0].description,
          startTime: res.data.events.event[0].start_time,
          // image: res.data.events.event[0].image.medium.url,
          url: res.data.events.event[0].url,
          venue: res.data.events.event[0].venue_name
        })
      ).then(res => this.renderNoImage()
      ).catch(err => console.log(err));
  };

  //function to set image state to default image
  renderNoImage = (res) => {
    if (!this.state.image) {
      this.setState({image: "../../src/img/noimage.jpg" })
    } 
  }

  //function to render description
  renderDescription = () => ({ __html: this.state.description })

  render() {
    return (
      <div>
        <Hero backgroundImage="https://thumbs.gfycat.com/RightDisloyalGallinule-size_restricted.gif" >
          <h1>Local Events</h1>
          <h3 className="text-center">Thumbs up on any events you want to save for later</h3>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-4">

              {/* button to load next event */}
              <CardBtn
                  onClick={this.handlePassButton}
                  data-value="pass"
                />

            </Col>
            <Col size="md-4">

              {/* card to hold event generated from api */}
              <div className="card" 
                style={{backgroundColor: "black", 
                width: "500px", 
                height: "auto",
                borderWidth: "1px", 
                borderColor: "white", 
                borderStyle: "solid" }}
              >
                {/* <img src={this.state.image} 
                  className="card-img-top" 
                  alt={this.state.event} 
                  onError={this.renderNoImage}
                /> */}
                  <div className="card-body">
                    <h3>{this.state.event}</h3>
                    <p className="card-text" dangerouslySetInnerHTML={this.renderDescription()}></p>
                    <br />
                    <p>Venue: {this.state.venue}</p>
                    <p>Start Time: {this.state.startTime}</p>
                    
                  </div>  
              </div>

            </Col>
            <Col size="md-4">
            
              {/* button to save event */}
              <CardBtn
                onClick={this.handlePickButton()}
                data-value="pick" 
              />
            
            </Col>
          </Row>
        </Container>
      </div>

        );
      }
    }
    
    export default Discover;


