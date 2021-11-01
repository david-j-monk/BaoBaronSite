import React, { Component } from 'react'
import { NavItem } from "./NavItem";
import {
  Link
} from "react-router-dom";

export class Header extends Component {

  state = { isActive: false };
  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;
    return (
      <div className="bb-header">

        <div id="bb-header-logo-pos">
          <Link to="/">
            <div className="bb-header-logo ripple" ><NavItem name="Home" /></div>
          </Link>
        </div>

        <div className="bb-nav-links">
          <Link to="/"><div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.07s" }} onClick={e => this.props.pageScroller("about")}><NavItem name="About Us" /></div></Link>
          <Link to="/Suppliers"><div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.14s" }}><NavItem name="Suppliers" /></div></Link>
          <Link to="/Menu"><div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.21s" }}><NavItem name="Menu" /></div></Link>
          <Link to="/Booking"><div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.28s" }}><NavItem name="Booking" /></div></Link>
          <Link to="/Publicity"><div className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.35s" }}><NavItem name="Publicity" /></div></Link>
        </div>
        <div className={`bb-main-menu ${isActive ? "danger" : ""}`} onClick={this.handleToggle}>
          <div id="bb-main-menu-burger" className={isActive ? "open" : null}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`bb-nav-links ${isActive ? "open" : ""}`}>
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Menu" /></div>
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Booking" /></div>
            <div className="bb-nav-link" onClick={e => this.props.pageScroller("Home", "about")}><NavItem name="About Us" /></div>
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Suppliers" /></div>
            <div className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Publicity" /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
