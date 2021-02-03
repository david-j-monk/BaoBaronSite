import React, { Component } from 'react';
import bb_background from './../images/baobaronlogo.png'

export class HomePage extends Component {
  render() {
    return (
      <div className="bb-homepage">
        <img className="bb-logo" src={bb_background} alt="bao baron logo"/>
      </div>
    )
  }
}

export default HomePage
