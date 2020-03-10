import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
    );
  }
}
