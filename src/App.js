import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

//import react components
import Navbar from "./components/Navbar";
import Footer from ".components/footer";

//import pages
import Home from ".pages/home";
import Profile from ".pages/profile"
import Search from ".pages/search"


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
