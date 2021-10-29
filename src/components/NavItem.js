import React, { Component } from 'react'

export class NavItem extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="bb-nav-link">
        {name !== "Home" ? name : ""}
      </div>
    )
  }
}

export default NavItem
