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
          <span id='menu-title'><b>Glossary</b></span><br /><br />
        </ul>
      </div>
    )
  }
}

export default Menu
