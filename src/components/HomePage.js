import React, { Component } from "react";
import Instapost from './Instapost'

export class HomePage extends Component {
  render() {
    return (
      <div className="bb-homepage">
        Address:
        <br />
        <br />
        Home Taproom, <br />
        61 Tontine Street <br />
        Folkestone
        <br />
        CT20 1JR
        <br />
        <br />
        <br />
        Contact Info:
        <br />
        <br />
        01303244666 / the.lastbaron@outlook.com
        <br />
        <br />
        Social Media Links:
        <br />
        <br />
        https://www.facebook.com/thebaobaron
        <br />
        https://www.instagram.com/thebaobaron/
        <br />
        <br />
        Business hours:
        <br />
        Wed - Thurs 5pm - 7:30pm
        <br />
        Fri - Sat 12pm - 2pm / 5pm / 8.30pm
        <br />
        Open Sundays during school holidays and national lockdowns 12pm - 2pm /
        5pm / 7:30pm <br />
        <Instapost />
      </div>
    );
  }
}

export default HomePage;
