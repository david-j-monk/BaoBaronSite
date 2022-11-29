import React, { Component } from 'react'
import menuimg from '../images/Menu.png';

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <img src={menuimg} alt="menu"/>
      </div>
    )
  }
}

export default Menu
