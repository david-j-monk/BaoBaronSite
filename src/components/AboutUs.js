import React, { Component } from 'react'

export class AboutUs extends Component {
  render() {
    return (
      <div className="bb-about-us">
      <div className="bb-spacer" />
        <div className="bb-about-us-words">
        The Bao Baron is a Pan-Asian street food restaurant inspired by seasonal Kentish produce.  Specialising in bao buns and ramen, everything from buns to broth is prepared in house and served fresh to order. By following the seasons and utilising local suppliers, we are able to provide a frequently changing menu that celebrates both the variety of Asian cuisines and the versatility of Kentish produce. Inclusivity is at the heart of what we do and we are proud to offer a considered selection of vegan, dairy free and gluten free dishes throughout our menu. 
        <br /><br />
        A family run business, The Bao Baron is a product of the first national lockdown, established by local chef Greig Hughes and partner Daisy Wootton. Beginning as a side hustle to help ends meet during an uncertain time, its success and feedback was so overwhelming that the business simply continued to grow. From a tiny pop-up event tucked away in the Harbour Arm corridor, to a bustling lockdown takeaway hidden in a taproom on Tontine Street, The Bao Baron came full circle as a hugely popular food hut in the Harbour Arm East Yard during the Summer of 2021. By Autumn, a year on from its first pop-up, The Bao Baron finally took root as a permanent establishment in Guildhall Street.
        </div>
        <br />
        <span className="bb-text-header">Open Hours</span>
        <br />
        <span className="bb-open-days">Tues - Thur</span> : <span className="bb-open-time">12-2.30, 6-9</span>
        <br />
        <span className="bb-open-days">Friday & Saturday</span> : <span className="bb-open-time">12-2.30, 6-9.30</span>
      </div>
    )
  }
}

export default AboutUs
