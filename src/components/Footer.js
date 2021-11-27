import React, { Component } from 'react'

import facebookImageUrl from '../images/facebook/f_logo_RGB-Blue_1024.png';
import instagramImageUrl from '../images/instagram.png';

export class Footer extends Component {
  render() {
    return ( 
      <div className="bb-footer">        
        <div className="bb-footer-content">
          <div className="bb-footer-address">
              <a href="tel:01303244666">01303244666</a>
              <br /><a href="mailto:the.lastbaron@outlook.com">the.lastbaron@outlook.com</a>
          </div>  
          <div>
            <div className="bb-social-media-links">
              <a href="https://www.facebook.com/thebaobaron"><img src={facebookImageUrl} alt="facebook" className="bb-social-icon" /></a> 
              <a href="https://www.instagram.com/thebaobaron"><img src={instagramImageUrl} alt="instagram" className="bb-social-icon" /></a>
            </div>  
            <div className="bb-spacer" />
            <div>
              The Bao Baron, <br /> 
              19 Guildhall Street, Folkestone, Kent, CT20 1EA
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
