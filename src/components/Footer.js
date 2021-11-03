import React, { Component } from 'react'

import facebookImageUrl from '../images/facebook/f_logo_RGB-Blue_1024.png';

export class Footer extends Component {
  render() {
    return ( 
      <div className="bb-footer">
          <a href="https://www.facebook.com/thebaobaron"><img src={facebookImageUrl} alt="facebook" className="bb-social-icon" /></a>
      </div>
    )
  }
}

export default Footer
