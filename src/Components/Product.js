import React, { Component } from "react";
export default class Product extends Component {
  render() {
    const { productid } = this.props.data;
    return (
      <div>
        <h3>{productid.id}</h3>
        <h3>{productid.name}</h3>
      </div>
    );
  }
}
