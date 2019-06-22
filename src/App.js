//import react
import React from 'react';

//import router
import { BrowserRouter as Router, Route } from "react-router-dom";

//import logo from './logo.svg';

//import styling 
import './App.css';

//import components
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper"

//import pages
import About from "./pages/About";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
// import Signup from "./pages/signup";
// import Login from "./pages/login";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/discover" component={Discover} />
          {/* <Route exact path="/signup" component = {Signup} />
          <Route exact path="/login" component = {Login} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
