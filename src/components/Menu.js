import React, { Component } from 'react'
import Bao from './MenuSections/Bao'
import Rice from './MenuSections/Rice'
import Dessert from './MenuSections/Dessert'
import Noodle from './MenuSections/Noodle'
import XiaoChi from './MenuSections/XiaoChi'
import Snacks from './MenuSections/Snacks'
import BrunchBao from './MenuSections/BrunchBao'
import BrunchRice from './MenuSections/BrunchRice'
import BrunchDessert from './MenuSections/BrunchDessert'
import BrunchSnacks from './MenuSections/BrunchSnacks'
import BrunchNoodle from './MenuSections/BrunchNoodle'
import BrunchKatsuSando from './MenuSections/BrunchKatsuSando'
import BrunchXiaoChi from './MenuSections/BrunchXiaoChi'
import BrunchEggs from './MenuSections/BrunchEggs'
import Kids from './MenuSections/Kids'


export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <ul>
          <span id='menu-title'><b>MAIN MENU</b></span><br /><br />
          <li><Bao /></li>
          <li><Noodle /></li>
          <li><XiaoChi /></li>
          <li><Rice /></li>
          <li><Dessert /></li>
          <li><Snacks /></li>
          <br />
          <span id='menu-title'><b>WEEKEND BRUNCH MENU</b></span><br />
          <i>Sat and Sun 10-2</i>
          <br /><br />
          <li><BrunchBao /></li>
          <li><BrunchKatsuSando /></li>
          <li><BrunchNoodle /></li>
          <li><BrunchRice /></li>
          <li><BrunchXiaoChi /></li>
          <li><BrunchEggs /></li>
          <li><BrunchDessert /></li>
          <li><BrunchSnacks /></li>
          <br />
          <span id='menu-title'><b>KID'S MENU</b></span><br />
          <li><Kids /></li>
        </ul>
      </div>
    )
  }
}

export default Menu
