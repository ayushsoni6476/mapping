import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Default from "./Components/Default";
import ProductList from "./Components/ProductList";
//import { ProductProvider } from "./ProductProvider";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
