import React, { Component } from 'react'
import Bao from './MenuSections/Bao'
import Rice from './MenuSections/Rice'
import Dessert from './MenuSections/Dessert'
import Ramen from './MenuSections/Ramen'
import XiaoChi from './MenuSections/XiaoChi'
import Snacks from './MenuSections/Snacks'
import WDSMBao from './MenuSections/WDSMBao'
// import WDSMRice from './MenuSections/WDSMRice'
import WDSMDessert from './MenuSections/WDSMDessert'
// import WDSMExtras from './MenuSections/WDSMExtras'
import WDSMRamen from './MenuSections/WDSMRamen'
import WDSMXiaoChi from './MenuSections/WDSMXiaoChi'
import Kids from './MenuSections/Kids'


export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <ul>
          <span id='menu-title'><b>MAIN MENU</b></span><br /><br />
          <li><Bao /></li>
          <li><Ramen /></li>
          <li><Rice /></li>
          <li><XiaoChi /></li>
          <li><Dessert /></li>
          <li><Snacks /></li>
          <br />
          <span id='menu-title'><b>WEEKDAY SET MENU</b></span><br />
          <i>TUESDAY TO FRIDAY LUNCH</i><br /><br />
          <span id='WDSM-instructions'><b>2 courses £20 / 3 courses £24<br />
            ONE DISH FROM EACH COURSE<br />
            Meal inclusive of a bottled beer/cider, glass of house wine or soft drink</b></span>
          <br /><br />
          <b>SMALL DISHES</b><br /><br />
          <li><WDSMXiaoChi /></li>
          <b>LARGE DISHES</b><br />
          Choice of either 2 bao, or a ramen bowl<br /><br />
          <li><WDSMBao /></li>
          <li><WDSMRamen /></li>
          <li><WDSMDessert /></li>
          <br />
          <span id='menu-title'><b>KID'S MENU</b></span><br />
          <li><Kids /></li>
        </ul>
      </div>
    )
  }
}

export default Menu
