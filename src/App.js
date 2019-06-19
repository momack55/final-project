import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from ".components/footer";

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
