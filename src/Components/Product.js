import React, { Component } from "react";
import { ProductConsumer } from "../ProductProvider";
export default class Product extends Component {
  render() {
    const { id, name } = this.props.product;
    return (
      <div>
        <h1>{id}</h1>
        <h1>{name}</h1>
      </div>
    );
  }
}
