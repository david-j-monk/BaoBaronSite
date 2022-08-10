import React, { Component } from 'react'
import menuimg from '../images/Menu.png';
import glossaryimg from '../images/Glossary.png';

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <img src={menuimg} alt="menu"/>
        <img src={glossaryimg} alt="menu"/>
      </div>
    )
  }
}

export default Menu
