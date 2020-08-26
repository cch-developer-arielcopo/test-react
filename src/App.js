import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>

          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contactus" component={ContactUs} />
        </div>
      </HashRouter>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>
const Pricing = () => <div><h2>Pricing</h2></div>
const ContactUs = () => <div><h2>Contact Us</h2></div>

export default App;