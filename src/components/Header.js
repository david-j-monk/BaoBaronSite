import React, { Component } from 'react'
import { NavItem } from "./NavItem";

export class Header extends Component {

  render() {

    return (
      <div className="bb-header">
        <div className="bb-nav-links">
          <div className="bb-nav-link bouncy ripple" style={{animationDelay: "0.07s"}} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Home"/></div>
          <div className="bb-nav-link bouncy ripple" style={{animationDelay: "0.14s"}} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Suppliers"/></div>
          <div className="bb-nav-link bouncy ripple" style={{animationDelay: "0.21s"}} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="About Us"/></div>
          <div className="bb-nav-link bouncy ripple" style={{animationDelay: "0.28s"}} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Menu"/></div>
          <div className="bb-nav-link bouncy ripple" style={{animationDelay: "0.35s"}} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Vegan"/></div>
          <div className="bb-nav-link bouncy ripple" style={{animationDelay: "0.42s"}} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Publicity"/></div>
          <div className="bb-nav-link bouncy ripple" style={{animationDelay: "0.49s"}} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="How To Order"/></div>
        </div>
        <div className="fade"></div>
      </div>
    )
  }
}

export default Header
