import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Container>
          <ProductList />
        </Container>
      </div>
    );
  }
}

export default App;
