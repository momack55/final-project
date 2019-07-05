
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

//import styling 
import './App.css';

//import components
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper"
//import pages
import Profile from "./pages/Profile";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={Login} />  
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>      
          </Wrapper>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
