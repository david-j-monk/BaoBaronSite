import React, { Component } from 'react'
import Menu from './MenuKids'
import Menu from './MenuBrunch'
import Menu from './MenuMain'
import Menu from './MenuGlossary'


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
