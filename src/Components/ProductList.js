import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { data } from "../Data";
export default class ProductList extends Component {
  state = {
    value: data
  };
  render() {
    return (
      <React.Fragment>
        <div className="py">
          <div className="container">
            <Title name="our" title=" products" />
            <div className="row">
              {this.state.value.map(product => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
