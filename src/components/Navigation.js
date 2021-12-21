import React from "react";
import { NavLink } from "react-router-dom";

class NavLinkLabel extends React.Component {
  render() {
    return (
      <NavLink to={this.props.to} style={{ padding: 5 }}> {this.props.label} </NavLink>
    );
  }
}

class Navigation extends React.Component {
  render() {
    let links = this.props.links;
    return (
      <nav style={{ margin: 20 }}>
        {
          (links === undefined || links.length == 0) ?
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
