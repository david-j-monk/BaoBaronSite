import React, { Component } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Menu from "./Menu";
import Vegan from "./Vegan";
import Publicity from "./Publicity";
import Suppliers from "./Suppliers";
import Booking from "./Booking";
import Footer from "./Footer";

export class PageHandler extends Component {
  state = { currentPage: "Home" };
  renderSwitch(param) {
    switch (param) {
      case "Home":
        return <HomePage />;
      case "Suppliers":
        return <Suppliers />;
      case "Menu":
        return <Menu />;
      case "Vegan":
        return <Vegan />;
      case "Publicity":
        return <Publicity />;
        case "Booking":
          return <Booking />;
      default:
        return <HomePage />;
    }
  }

  pageSwitcher = (target) => {
    this.setState({ currentPage: target });
  }

  pageScroller = (page, target) => { 
    this.setState({ currentPage: page });
    var el = document.getElementById(target);
    if (el) el.scrollIntoView();
  }

  render() {
    return (
      <div className="bb-page">
        <Header pageSwitcher={this.pageSwitcher} pageScroller={this.pageScroller} />
        <div className="bb-body">{this.renderSwitch(this.state.currentPage)}</div>
        <Footer />
      </div>
    );
  }
}

export default PageHandler;
