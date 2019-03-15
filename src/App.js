import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";

import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import FrontPage from "./Components/Pages/FrontPage";
import SideDrawer from "./Components/Nav/SideDrawer";
import BackDrop from "./Components/Nav/BackDrop";

class App extends Component {
  
    render (){

     return(
      <div>
     
       <FrontPage/>
     
    
      </div>
    );
      }
}

export default App;
