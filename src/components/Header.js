import React, { Component } from 'react'
import { NavItem } from "./NavItem";
import { HashLink as Link } from "react-router-hash-link";

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
          <Link to="/home" className="bb-header-logo ripple" ><NavItem name="Home" />
          </Link>
        </div>

        <div className="bb-nav-links">
          <Link to="/home#about" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.07s" }}><NavItem name="About Us" /></Link>
          <Link to="/suppliers" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.14s" }}><NavItem name="Suppliers" /></Link>
          <Link to="/menu" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.21s" }}><NavItem name="Menu" /></Link>
          <Link to="/booking" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.28s" }}><NavItem name="Booking" /></Link>
          <Link to="/publicity" className="bb-nav-link bouncy ripple" style={{ animationDelay: "0.35s" }}><NavItem name="Publicity" /></Link>
        </div>
        <div className={`bb-main-menu ${isActive ? "open" : ""}`} onClick={this.handleToggle}>
          <div id="bb-main-menu-burger" className={isActive ? "open" : null}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`bb-nav-links ${isActive ? "open" : ""}`}>
            <Link to="/menu" className="bb-nav-link"><NavItem name="Menu" /></Link>
            <Link to="/booking" className="bb-nav-link"><NavItem name="Booking" /></Link>
            <Link to="/home#about" className="bb-nav-link"><NavItem name="About Us" /></Link>
            <Link to="/suppliers" className="bb-nav-link"><NavItem name="Suppliers" /></Link>
            <Link to="/publicity" className="bb-nav-link"><NavItem name="Publicity" /></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
