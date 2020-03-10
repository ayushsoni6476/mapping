import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Data from "../Data";
export default class ProductList extends Component {
  state = {
    data: { Data }
  };

  render() {
    return (
      <React.Fragment>
        <div className="py">
          <div className="container">
            <Title name="our" title=" products" />
            <div className="row">
              <Product data={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
