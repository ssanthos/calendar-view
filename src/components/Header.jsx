import React, { Component } from "react";
import logo from "../calendar.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a className="logo-container" href="./">
          <img className="logo" src={logo} alt="logo" />
          <span className="app-name">Calendar Weekly</span>
        </a>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
