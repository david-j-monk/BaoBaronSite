import React, { Component } from "react";
import Instapost from './Instapost'
import AboutUs from './AboutUs'

export class HomePage extends Component {
  
  render() {
    return (
      <div className="bb-homepage-layout"> 
        <div className="bb-homepage-mainimage" />
        <div id="about" className="bb-homepage-section">
          <AboutUs />
        </div>
      </div>
    );
  }
}

export default HomePage;
