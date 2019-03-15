import React, { Component } from "react";
import { products } from "../Data";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./Nav/NavBar";

class ProductList extends Component {
  state = {
    productsItems: products
  };
  render() {
    return (
    
      <Row> 
         <NavBar/>

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
              
              <Link to="/details">
              <img height={100} src={`/makeup/${item.image}`} />
              </Link><br />


            {item.price}€<br />
            
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default ProductList;
