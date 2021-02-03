import React, { Component } from "react";
import Header from "./Header";
import { HomePage } from "./HomePage";
import { HowToOrder } from "./HowToOrder";
import { Menu } from "./Menu";
import { Vegan } from "./Vegan";
import { Publicity } from "./Publicity";
import { Suppliers } from "./Suppliers";
import { AboutUs } from "./AboutUs";

export class PageHandler extends Component {
  state = { currentPage: "Home" };
  renderSwitch(param) {
    switch (param) {
      case "Home":
        return <HomePage />;
      case "About Us":
        return <AboutUs />;
      case "Suppliers":
        return <Suppliers />;
      case "Menu":
        return <Menu />;
      case "Vegan":
        return <Vegan />;
      case "Publicity":
        return <Publicity />;
      case "How To Order":
        return <HowToOrder />;
      default:
        return <HomePage />;
    }
  }

  pageSwitcher = (target) =>{
    this.setState({currentPage: target});
  }

  render() {
    return (
      <div className="bb-page">
        <Header pageSwitcher={this.pageSwitcher}/>
        <div className="bb-body">{this.renderSwitch(this.state.currentPage)}</div>
      </div>
    );
  }
}

export default PageHandler;
