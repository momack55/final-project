import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

//import react components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper"

//import pages
import Home from ".pages/home";
import Profile from ".pages/profile"
import Search from ".pages/search"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component = {Home} />
          <Route exact path="/profile" component = {Profile} />
          <Route exact path="/search" component = {Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
