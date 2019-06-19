//import react
import React from 'react';

//import router
import { BrowserRouter as Router, Route } from "react-router-dom";

//import logo from './logo.svg';

//import styling 
import './App.css';

//import components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper"

//import pages
import Home from "./pages/home";
import Profile from "./pages/profile";
import Search from "./pages/search";
// import Signup from "./pages/signup";
// import Login from "./pages/login";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component = {Home} />
          <Route exact path="/profile" component = {Profile} />
          <Route exact path="/search" component = {Search} />
          {/* <Route exact path="/signup" component = {Signup} />
          <Route exact path="/login" component = {Login} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
