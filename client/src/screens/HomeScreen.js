import React, { Component } from "react";
import Filter from "../components/pages/Filter";
import Products from "../components/pages/Products";
import Cart from "../components/pages/Cart";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter></Filter>
            <Products></Products>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}