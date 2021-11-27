import React, { Component } from 'react'



export class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='bb-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.525731208286!2d1.1775421158819839!3d51.08030444966082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47debf1ae9b1f5c3%3A0xb05f564ce3c5cc30!2sThe%20Bao%20Baron!5e0!3m2!1sen!2suk!4v1637855922866!5m2!1sen!2suk" allowfullscreen="false" loading="lazy"></iframe>
      </div>
    );
  }
}

export default Map
