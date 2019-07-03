import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import styling 
import './App.css';

//import components
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper"
import About from "./pages/About";
import Discover from "./pages/Discover";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={Login} />        
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
