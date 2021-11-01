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
          <Link to="/" className="bb-header-logo ripple" ><NavItem name="Home" />
          </Link>
        </div>

        <div className="bb-nav-links">
          <Link to="/" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.07s" }} onClick={e => this.props.pageScroller("about")}><NavItem name="About Us" /></Link>
          <Link to="/Suppliers" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.14s" }}><NavItem name="Suppliers" /></Link>
          <Link to="/Menu" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.21s" }}><NavItem name="Menu" /></Link>
          <Link to="/Booking" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.28s" }}><NavItem name="Booking" /></Link>
          <Link to="/Publicity" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.35s" }}><NavItem name="Publicity" /></Link>
        </div>
        <div className={`bb-main-menu ${isActive ? "open" : ""}`} onClick={this.handleToggle}>
          <div id="bb-main-menu-burger" className={isActive ? "open" : null}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`bb-nav-links ${isActive ? "open" : ""}`}>
            <Link to="/Menu" className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Menu" /></Link>
            <Link to="/Booking" className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Booking" /></Link>
            <Link to="/" className="bb-nav-link" onClick={e => this.props.pageScroller("about")}><NavItem name="About Us" /></Link>
            <Link to="/Suppliers" className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Suppliers" /></Link>
            <Link to="/Publicity" className="bb-nav-link" onClick={e => this.props.pageSwitcher(e.target.innerText)}><NavItem name="Publicity" /></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
