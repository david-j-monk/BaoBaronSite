import React, { Component } from 'react'
import Bao from './MenuSections/Bao'
import Bibimbap from './MenuSections/Bibimbap'
import Dessert from './MenuSections/Dessert'
import Ramen from './MenuSections/Ramen'
import XiaoChi from './MenuSections/XiaoChi'


export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <ul>
          <li><Bao /></li>
          <li><Ramen /></li>
          <li><Bibimbap /></li>
          <li><XiaoChi /></li>
          <li><Dessert /></li>
        </ul>
      </div>
    )
  }
}

export default Menu
