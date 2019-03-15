import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import frontPage2 from "./frontPage2.jpg";
import NavBar from "../Nav/NavBar"
import SideDrawer from "../Nav/SideDrawer";
import BackDrop from "../Nav/BackDrop";



class FrontPage extends Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
this.setState((prevState) => {
  return {sideDrawerOpen: !prevState.sideDrawerOpen}
})
  }

  backdropClickHandler = ()=>{
    this.setState({sideDrawerOpen:false})
  }

  render() {
   ;
    let backdrop;

    if(this.state.sideDrawerOpen){
    
      backdrop= <BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height:'100%'}}>
       <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
 <SideDrawer show={this.state.sideDrawerOpen}/>
       {backdrop}


        <img
          src={frontPage2}
          alt="store"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }
}

export default FrontPage;
