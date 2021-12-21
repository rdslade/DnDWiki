import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

class NavLinkLabel extends React.Component {
  render() {
    return (
      <NavLink className={"navlink"} style={{padding: 5}} to={this.props.to}> {this.props.label} </NavLink>
    );
  }
}

class Navigation extends React.Component {
  render() {
    let links = this.props.links;
    return (
      <nav style={{ margin: 20 }}>
        {
          (links === undefined || links.length === 0) ?
          (<h2>No links</h2>) :
          (
          links.map(link => 
            <NavLinkLabel to={link.to} label={link.title} />
          )
          )
        }
      </nav>
    );
  }
}

export default Navigation;
