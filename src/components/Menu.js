import React, { Component } from 'react'
import Menu1 from './../images/Menu/Menu1.jpg'
import Menu2 from './../images/Menu/Menu2.jpg'
import Menu3 from './../images/Menu/Menu3.jpg'
import Menu4 from './../images/Menu/Menu4.jpg'


export class Menu extends Component {
  render() {
    return (
      <div className='gallery'>
        <ul>
          <li><img src={Menu1} alt="First menu item" /></li>
          <li><img src={Menu2} alt="Second menu item" /></li>
          <li><img src={Menu3} alt="Third menu item" /></li>
          <li><img src={Menu4} alt="Fourth menu item" /></li>
        </ul>
      </div>
    )
  }
}

export default Menu
