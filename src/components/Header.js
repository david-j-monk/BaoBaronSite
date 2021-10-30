import React, { Component } from 'react'
import { NavItem } from "./NavItem";

export class Header extends Component {
  
  state = { isActive: false };
  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });  };

  render() {
    const isActive = this.state.isActive;
    return (
      <div className="bb-header">
        <div id="bb-header-logo-pos">
          <div className="bb-header-logo" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Home" /></div>
        </div>
        <div className="bb-nav-links">
          <div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.07s" }} onClick={e => this.props.pageScroller("Home", "about")}><NavItem name="About Us" /></div>
          <div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.14s" }} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Suppliers" /></div>
          <div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.21s" }} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Menu" /></div>
          <div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.28s" }} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Booking" /></div>
          <div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.35s" }} onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Publicity" /></div>
        </div>
        <div className={`bb-main-menu ${isActive ? "danger" : ""}`} onClick={this.handleToggle}> 
          <div id="bb-main-menu-burger" className={isActive ? "open" : null}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bb-nav-links">
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Menu" /></div>
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Suppliers" /></div>
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Our Story" /></div>
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Vegan" /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
