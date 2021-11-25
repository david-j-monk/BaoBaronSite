import React, { Component } from "react";
import AboutUs from './AboutUs'
import Map from './Map';

export class HomePage extends Component {
  
  render() {
    return (
      <div className="bb-homepage-layout"> 
        <div className="bb-homepage-mainimage" />
        <div id="about" className="bb-homepage-section">
          <AboutUs />
        </div>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}

export default HomePage;
