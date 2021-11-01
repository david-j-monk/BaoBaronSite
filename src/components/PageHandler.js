import React, { Component } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Menu from "./Menu";
import Vegan from "./Vegan";
import Publicity from "./Publicity";
import Suppliers from "./Suppliers";
import Booking from "./Booking";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class PageHandler extends Component {

  renderSwitch() {

    return <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/Suppliers">
        <Suppliers />
      </Route>
      <Route path="/Menu">
        <Menu />
      </Route>
      <Route path="/Vegan">
        <Vegan />
      </Route>
      <Route path="/Publicity">
        <Publicity />
      </Route>
      <Route path="/Booking">
        <Booking />
      </Route>
    </Switch>

  }

  pageSwitcher = (target) => {
    this.setState({ currentPage: target });
  }

  pageScroller = (target) => {
    var el = document.getElementById(target);
    if (el) el.scrollIntoView();
  }

  render() {
    return (
      <Router>

        <div className="bb-page">
          <Header pageSwitcher={this.pageSwitcher} pageScroller={this.pageScroller} />
          <div className="bb-body">{this.renderSwitch()}</div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default PageHandler;
