import React, { Component } from "react";
import { products } from "../Data";
import { Row, Col, Container } from "react-bootstrap";

class ProductList extends Component {
  state = {
    productsItems: products
  };
  render() {
    return (
      <Row>
        {this.state.productsItems.map(item => {
          return (
            <Col className="productCart"
              md={4}
              style={{
                backgroundColor: "yellow",
                border: "2px solid black",
                textAlign: "center"
              }}
            >
            {item.brand} <br/>
              {item.name}
              <br />
              
              <img height={100} src={`/makeup/${item.image}`} />
              <br />


            {item.price}€<br />
              <button onClick={() => this.item}>Add to cart</button>
              <br />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default ProductList;
