import React, { Component } from "react";
import MakeupList from "../MakeupList";
import NavBar from "../Nav/NavBar"
import SideDrawer from "../Nav/SideDrawer";
import BackDrop from "../Nav/BackDrop";
import "./MakeupPage.css";

class MakeupPage extends Component {
  
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
    <div className="margin-top"><MakeupList/></div>

          </div>
        );
      }
}

export default MakeupPage;
