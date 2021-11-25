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
  Redirect
} from "react-router-dom";

export class PageHandler extends Component {

  renderSwitch() {

    return  <Switch>
              <Route exact path="/" render={() => { return (<Redirect to="/home" />)}}/>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/suppliers">
                <Suppliers />
              </Route>
              <Route path="/menu">
                <Menu />
              </Route>
              <Route path="/vegan">
                <Vegan />
              </Route>
              <Route path="/publicity">
                <Publicity />
              </Route>
              <Route path="/booking">
                <Booking />
              </Route>
            </Switch>
  }

  render() {
    return (
      <Router>
        <div className="bb-page bb-patterned-background">
          <Header pageSwitcher={this.pageSwitcher} pageScroller={this.pageScroller} />
          <div className="bb-body">
              {this.renderSwitch()}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default PageHandler;
